import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { getSurah } from "@/lib/islamic.functions";
import { useI18n } from "@/lib/i18n";

const EDITIONS = [
  { id: "en.sahih", label: "English — Saheeh International", lang: "en" },
  { id: "en.pickthall", label: "English — Pickthall", lang: "en" },
  { id: "ha.gumi", label: "Hausa — Abubakar M. Gumi", lang: "ha" },
  { id: "none", label: "Arabic only", lang: "ar" },
  { id: "tw.unavailable", label: "Twi — not available", lang: "tw" },
];

export const Route = createFileRoute("/quran/$number")({
  head: ({ params }) => ({
    meta: [
      { title: `Surah ${params.number} — The Holy Qur'an — Ask Sheikh Hajj Kassim` },
      { name: "description", content: `Read Surah ${params.number} of the Holy Qur'an with Arabic text, translation and audio.` },
      { property: "og:title", content: `Surah ${params.number} — The Holy Qur'an` },
      { property: "og:description", content: "Authentic Arabic text with translation and recitation." },
    ],
  }),
  component: SurahPage,
});

function SurahPage() {
  const { number } = Route.useParams();
  const { t, lang } = useI18n();
  const fn = useServerFn(getSurah);
  const [edition, setEdition] = useState(lang === "ha" ? "ha.gumi" : lang === "ar" ? "none" : "en.sahih");
  const [fontSize, setFontSize] = useState(28);
  const surahNumber = Math.min(114, Math.max(1, Number(number) || 1));

  const requested = edition === "none" || edition === "tw.unavailable" ? null : edition;

  const query = useQuery({
    queryKey: ["surah", surahNumber, requested],
    queryFn: () => fn({ data: { number: surahNumber, edition: requested } }),
  });

  useEffect(() => {
    try {
      window.localStorage.setItem("ashk.lastSurah", String(surahNumber));
    } catch {
      /* ignore */
    }
  }, [surahNumber]);

  const data = query.data;

  return (
    <Layout>
      <div className="hero-surface pattern-geometric">
        <div className="mx-auto max-w-4xl px-4 py-10">
          <Link to="/quran" className="text-sm opacity-90 hover:underline">
            ← {t("quran.surahs")}
          </Link>
          {data && (
            <>
              <p className="mt-4 font-arabic text-4xl">{data.meta.name}</p>
              <h1 className="mt-2 font-display text-2xl">
                {data.meta.number}. {data.meta.englishName} — {data.meta.englishNameTranslation}
              </h1>
              <p className="mt-1 text-sm opacity-90">
                {data.meta.numberOfAyahs} {t("quran.verses")} ·{" "}
                {data.meta.revelationType === "Meccan" ? t("quran.meccan") : t("quran.medinan")}
              </p>
            </>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="card-elevated flex flex-wrap items-center gap-3 p-4">
          <label className="text-sm text-muted-foreground">{t("common.translation")}</label>
          <select
            value={edition}
            onChange={(e) => setEdition(e.target.value)}
            className="rounded-lg border border-input bg-background px-3 py-2 text-sm"
          >
            {EDITIONS.map((e) => (
              <option key={e.id} value={e.id}>
                {e.label}
              </option>
            ))}
          </select>
          <label className="ms-auto text-sm text-muted-foreground">{t("quran.arabicFontSize")}</label>
          <input
            type="range"
            min={20}
            max={48}
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
          />
        </div>

        {edition === "tw.unavailable" && (
          <p className="mt-4 rounded-xl border border-gold/60 bg-cream p-4 text-sm">{t("quran.translationUnavailable")}</p>
        )}

        {data && (
          <div className="card-elevated mt-4 flex flex-wrap items-center gap-3 p-4">
            <audio
              controls
              preload="none"
              className="w-full"
              src={`${data.audioBase}/${data.meta.number}.mp3`}
            />
          </div>
        )}

        {query.isLoading && <p className="mt-6 text-sm text-muted-foreground">{t("common.loading")}</p>}
        {query.isError && (
          <div className="mt-6">
            <p className="text-sm text-destructive">{t("common.error")}</p>
            <Button className="mt-2" onClick={() => query.refetch()}>
              {t("common.retry")}
            </Button>
          </div>
        )}

        <div className="mt-6 space-y-4">
          {(data?.arabic ?? []).map((ayah, i) => {
            const translation = data?.translation?.[i];
            const ref = `${data?.meta.englishName} ${data?.meta.number}:${ayah.numberInSurah}`;
            return (
              <article key={ayah.number} className="card-elevated p-5">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs text-accent-foreground">
                    {ayah.numberInSurah}
                  </span>
                  <div className="ms-auto flex gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        void navigator.clipboard.writeText(`${ayah.text}\n${translation?.text ?? ""}\n(${ref})`);
                        toast.success(t("common.copied"));
                      }}
                    >
                      {t("common.copy")}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        try {
                          const key = "ashk.bookmarks";
                          const saved = JSON.parse(window.localStorage.getItem(key) ?? "[]") as string[];
                          window.localStorage.setItem(key, JSON.stringify([...new Set([...saved, ref])]));
                          toast.success(t("common.bookmarked"));
                        } catch {
                          /* ignore */
                        }
                      }}
                    >
                      {t("common.bookmark")}
                    </Button>
                  </div>
                </div>
                <p className="arabic mt-4" style={{ fontSize: `${fontSize}px` }}>
                  {ayah.text}
                </p>
                {translation && <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{translation.text}</p>}
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-xs text-muted-foreground">{t("quran.attribution")}</p>
      </div>
    </Layout>
  );
}

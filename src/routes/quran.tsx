import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useMemo, useState } from "react";
import { Layout, PageHeader } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { getSurahList, searchQuran } from "@/lib/islamic.functions";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/quran")({
  head: () => ({
    meta: [
      { title: "The Holy Qur'an — All 114 Surahs — Ask Sheikh Hajj Kassim" },
      {
        name: "description",
        content: "Read the complete Holy Qur'an: all 114 Surahs with authentic Arabic text, English and Hausa translations, audio and search.",
      },
      { property: "og:title", content: "The Holy Qur'an — All 114 Surahs" },
      { property: "og:description", content: "Complete Qur'an with Arabic text, translations, audio and keyword search." },
    ],
  }),
  component: QuranLayout,
});

function QuranLayout() {
  const location = useLocation();
  
  // If we're on a child route like /quran/1, render the outlet
  if (location.pathname !== '/quran' && location.pathname !== '/quran/') {
    return <Outlet />;
  }
  
  // Otherwise render the list page
  return (
    <Layout>
      <QuranPage />
    </Layout>
  );
}

function QuranPage() {
  const { t } = useI18n();
  const listFn = useServerFn(getSurahList);
  const searchFn = useServerFn(searchQuran);
  const [filter, setFilter] = useState("");
  const [query, setQuery] = useState("");

  const surahs = useQuery({ queryKey: ["surahs"], queryFn: () => listFn() });
  const search = useQuery({
    queryKey: ["quran-search", query],
    queryFn: () => searchFn({ data: { query } }),
    enabled: query.trim().length > 1,
  });

  const filtered = useMemo(() => {
    const list = surahs.data ?? [];
    const f = filter.trim().toLowerCase();
    if (!f) return list;
    return list.filter(
      (s) => s.englishName.toLowerCase().includes(f) || s.name.includes(filter) || String(s.number) === f,
    );
  }, [surahs.data, filter]);

  return (
    <>
      <PageHeader title={t("quran.title")} subtitle={t("quran.subtitle")} />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <form
          className="flex flex-col gap-2 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            setQuery(filter);
          }}
        >
          <input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder={t("quran.searchPlaceholder")}
            className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
          />
          <Button type="submit" className="shrink-0">
            {t("common.search")}
          </Button>
        </form>

        {query.trim().length > 1 && (
          <section className="mt-6">
            <h2 className="font-display text-xl">{t("common.search")}: “{query}”</h2>
            {search.isLoading && <p className="mt-2 text-sm text-muted-foreground">{t("common.loading")}</p>}
            {search.isError && <p className="mt-2 text-sm text-destructive">{t("common.error")}</p>}
            {search.data && search.data.length === 0 && (
              <p className="mt-2 text-sm text-muted-foreground">{t("common.noResults")}</p>
            )}
            <div className="mt-3 space-y-2">
              {(search.data ?? []).map((m, i) => (
                <Link
                  key={i}
                  to="/quran/$number"
                  params={{ number: String(m.surahNumber) }}
                  className="card-elevated hover:card-elevated-hover block p-4"
                >
                  <p className="text-xs text-primary">
                    {m.surahEnglishName} — {m.surahNumber}:{m.numberInSurah}
                  </p>
                  <p className="mt-1 text-sm">{m.text}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-8">
          <h2 className="font-display text-xl">{t("quran.surahs")} (114)</h2>
          {surahs.isLoading && <p className="mt-2 text-sm text-muted-foreground">{t("common.loading")}</p>}
          {surahs.isError && <p className="mt-2 text-sm text-destructive">{t("common.error")}</p>}
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s) => (
              <Link
                key={s.number}
                to="/quran/$number"
                params={{ number: String(s.number) }}
                className="card-elevated hover:card-elevated-hover flex items-center gap-3 p-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-sm font-medium text-accent-foreground">
                  {s.number}
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-medium">{s.englishName}</span>
                  <span className="block text-xs text-muted-foreground">
                    {s.numberOfAyahs} {t("quran.verses")} ·{" "}
                    {s.revelationType === "Meccan" ? t("quran.meccan") : t("quran.medinan")}
                  </span>
                </span>
                <span className="ms-auto font-arabic text-lg text-primary">{s.name}</span>
              </Link>
            ))}
          </div>
        </section>

        <p className="mt-8 text-xs text-muted-foreground">{t("quran.attribution")}</p>
      </div>
    </>
  );
}

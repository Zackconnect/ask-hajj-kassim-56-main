import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/Layout";
import {
  HAJJ_DUAS,
  HAJJ_FAQ,
  HAJJ_MISTAKES,
  HAJJ_STEPS,
  HAJJ_TYPES,
  HAJJ_WOMEN,
  IHRAM_PROHIBITIONS,
  UMRAH_STEPS,
} from "@/lib/content";
import { pick, useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/hajj")({
  head: () => ({
    meta: [
      { title: "Hajj & Umrah Guide — Ask Sheikh Hajj Kassim" },
      {
        name: "description",
        content: "Step-by-step Hajj and Umrah guidance: Ihram, Miqat, Tawaf, Sa'i, Arafat, Muzdalifah, Rami and more.",
      },
      { property: "og:title", content: "Hajj & Umrah Guide" },
      { property: "og:description", content: "Complete multilingual Hajj and Umrah guidance with duas and FAQs." },
    ],
  }),
  component: HajjPage,
});

function HajjPage() {
  const { t, lang } = useI18n();
  return (
    <Layout>
      <PageHeader title={t("hajj.title")} subtitle={t("hajj.subtitle")} />
      <div className="mx-auto max-w-4xl space-y-10 px-4 py-10">
        <section>
          <h2 className="font-display text-2xl">{t("hajj.steps")}</h2>
          <ol className="mt-4 space-y-3">
            {HAJJ_STEPS.map((s, i) => (
              <li key={s.id} className="card-elevated p-5">
                <h3 className="font-display text-lg">
                  <span className="me-2 text-gold">{String(i + 1).padStart(2, "0")}</span>
                  {pick(s.title, lang)}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{pick(s.body, lang)}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="font-display text-2xl">{t("hajj.umrah")}</h2>
          <ol className="mt-4 space-y-3">
            {UMRAH_STEPS.map((s) => (
              <li key={s.id} className="card-elevated p-5">
                <h3 className="font-display text-lg">{pick(s.title, lang)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{pick(s.body, lang)}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="card-elevated p-5">
            <h2 className="font-display text-xl">{t("hajj.types")}</h2>
            <ul className="mt-3 space-y-3 text-sm">
              {HAJJ_TYPES.map((ty, i) => (
                <li key={i}>
                  <p className="font-medium">{pick(ty.name, lang)}</p>
                  <p className="text-muted-foreground">{pick(ty.body, lang)}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-elevated p-5">
            <h2 className="font-display text-xl">{t("hajj.prohibitions")}</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {IHRAM_PROHIBITIONS.map((p, i) => (
                <li key={i}>• {pick(p, lang)}</li>
              ))}
            </ul>
          </div>
          <div className="card-elevated p-5">
            <h2 className="font-display text-xl">{t("hajj.mistakes")}</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {HAJJ_MISTAKES.map((p, i) => (
                <li key={i}>• {pick(p, lang)}</li>
              ))}
            </ul>
          </div>
          <div className="card-elevated p-5">
            <h2 className="font-display text-xl">{t("hajj.women")}</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {HAJJ_WOMEN.map((p, i) => (
                <li key={i}>• {pick(p, lang)}</li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl">{t("hajj.duas")}</h2>
          <div className="mt-4 space-y-3">
            {HAJJ_DUAS.map((d, i) => (
              <div key={i} className="card-elevated p-5">
                <p className="arabic text-xl leading-loose">{d.arabic}</p>
                <p className="mt-3 text-sm italic text-muted-foreground">{d.transliteration}</p>
                <p className="mt-2 text-sm">{pick(d.meaning, lang)}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl">{t("hajj.faq")}</h2>
          <div className="mt-4 space-y-3">
            {HAJJ_FAQ.map((f, i) => (
              <div key={i} className="card-elevated p-5">
                <p className="font-medium">{pick(f.q, lang)}</p>
                <p className="mt-2 text-sm text-muted-foreground">{pick(f.a, lang)}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="rounded-xl border border-gold/50 bg-cream p-4 text-sm text-foreground">{t("ask.disclaimer")}</p>
      </div>
    </Layout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/Layout";
import { PILLARS } from "@/lib/content";
import { pick, useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/pillars")({
  head: () => ({
    meta: [
      { title: "The Five Pillars of Islam — Ask Sheikh Hajj Kassim" },
      { name: "description", content: "Shahadah, Salah, Zakat, Sawm and Hajj explained in English, Hausa, Twi and Arabic." },
      { property: "og:title", content: "The Five Pillars of Islam" },
      { property: "og:description", content: "Learn the five pillars with clear multilingual explanations." },
    ],
  }),
  component: PillarsPage,
});

function PillarsPage() {
  const { t, lang } = useI18n();
  return (
    <Layout>
      <PageHeader title={t("pillars.title")} subtitle={t("pillars.subtitle")} />
      <div className="mx-auto max-w-4xl space-y-4 px-4 py-10">
        {PILLARS.map((p) => (
          <article key={p.id} className="card-elevated p-6">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-display text-xl">
                {p.number}. {pick(p.title, lang)}
              </h2>
              <span className="font-arabic text-2xl text-primary">{p.arabicName}</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{pick(p.summary, lang)}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {p.details.map((d, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-gold">◆</span>
                  <span>{pick(d, lang)}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Layout>
  );
}

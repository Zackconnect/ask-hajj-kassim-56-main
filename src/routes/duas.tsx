import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Layout, PageHeader } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { DUAS, DUA_CATEGORIES } from "@/lib/duas";
import { pick, useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/duas")({
  head: () => ({
    meta: [
      { title: "Duas & Adhkar with Sources — Ask Sheikh Hajj Kassim" },
      { name: "description", content: "Authentic duas and adhkar for morning, evening, sleep, travel, protection and more, with Arabic, transliteration, translation and source." },
      { property: "og:title", content: "Duas & Adhkar" },
      { property: "og:description", content: "Supplications from the Qur'an and Sunnah with references." },
    ],
  }),
  component: DuasPage,
});

function DuasPage() {
  const { t, lang } = useI18n();
  const [category, setCategory] = useState("morning");
  const items = DUAS.filter((d) => d.category === category);

  return (
    <Layout>
      <PageHeader title={t("duas.title")} subtitle={t("duas.subtitle")} />
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="flex flex-wrap gap-2">
          {DUA_CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                category === c.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              {pick(c.label, lang)}
            </button>
          ))}
        </div>

        {items.length === 0 && <p className="mt-8 text-sm text-muted-foreground">{t("common.noResults")}</p>}

        <div className="mt-6 space-y-4">
          {items.map((d) => (
            <article key={d.id} className="card-elevated p-5">
              <div className="flex items-center gap-2">
                <h2 className="font-display text-lg">{pick(d.title, lang)}</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  className="ms-auto"
                  onClick={() => {
                    void navigator.clipboard.writeText(`${d.arabic}\n${d.transliteration}\n${pick(d.translation, lang)}\n(${d.source})`);
                    toast.success(t("common.copied"));
                  }}
                >
                  {t("common.copy")}
                </Button>
              </div>
              <p className="arabic mt-4 text-2xl">{d.arabic}</p>
              <p className="mt-3 text-sm italic text-muted-foreground">{d.transliteration}</p>
              <p className="mt-2 text-sm">{pick(d.translation, lang)}</p>
              <p className="mt-3 text-xs text-primary">
                {t("common.source")}: {d.source}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
}

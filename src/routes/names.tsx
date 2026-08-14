import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Layout, PageHeader } from "@/components/Layout";
import { getNamesOfAllah } from "@/lib/islamic.functions";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/names")({
  head: () => ({
    meta: [
      { title: "The 99 Names of Allah (Asma ul-Husna) — Ask Sheikh Hajj Kassim" },
      { name: "description", content: "All 99 beautiful names of Allah with Arabic script, transliteration and meaning." },
      { property: "og:title", content: "The 99 Names of Allah" },
      { property: "og:description", content: "Asma ul-Husna with Arabic, transliteration and meanings." },
    ],
  }),
  component: NamesPage,
});

function NamesPage() {
  const { t } = useI18n();
  const fn = useServerFn(getNamesOfAllah);
  const query = useQuery({ queryKey: ["names99"], queryFn: () => fn() });

  return (
    <Layout>
      <PageHeader title={t("names.title")} subtitle={t("names.subtitle")} />
      <div className="mx-auto max-w-6xl px-4 py-10">
        {query.isLoading && <p className="text-sm text-muted-foreground">{t("common.loading")}</p>}
        {query.isError && <p className="text-sm text-destructive">{t("common.error")}</p>}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {(query.data ?? []).map((n) => (
            <article key={n.number} className="card-elevated p-5 text-center">
              <p className="text-xs text-muted-foreground">{n.number}</p>
              <p className="font-arabic mt-2 text-3xl text-primary">{n.name}</p>
              <p className="mt-2 font-medium">{n.transliteration}</p>
              <p className="mt-1 text-sm text-muted-foreground">{n.meaning}</p>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
}

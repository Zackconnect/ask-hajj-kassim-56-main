import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { Layout, PageHeader } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { findHadith, getHadithPage, getRandomHadith } from "@/lib/islamic.functions";
import { useI18n } from "@/lib/i18n";

const COLLECTIONS = [
  { id: "bukhari", name: "Sahih al-Bukhari" },
  { id: "muslim", name: "Sahih Muslim" },
  { id: "abudawud", name: "Sunan Abu Dawud" },
  { id: "tirmidhi", name: "Jami' at-Tirmidhi" },
  { id: "nasai", name: "Sunan an-Nasa'i" },
  { id: "ibnmajah", name: "Sunan Ibn Majah" },
  { id: "malik", name: "Muwatta Malik" },
  { id: "nawawi", name: "40 Hadith Nawawi" },
];

export const Route = createFileRoute("/hadith")({
  head: () => ({
    meta: [
      { title: "Hadith Library — Bukhari, Muslim and more — Ask Sheikh Hajj Kassim" },
      { name: "description", content: "Browse and search authentic Hadith collections including Sahih al-Bukhari and Sahih Muslim with references." },
      { property: "og:title", content: "Hadith Library" },
      { property: "og:description", content: "Search authentic Hadith collections with full references." },
    ],
  }),
  component: HadithPage,
});

function HadithPage() {
  const { t } = useI18n();
  const pageFn = useServerFn(getHadithPage);
  const searchFn = useServerFn(findHadith);
  const randomFn = useServerFn(getRandomHadith);
  const [collectionId, setCollectionId] = useState("bukhari");
  const [section, setSection] = useState(1);
  const [term, setTerm] = useState("");
  const [query, setQuery] = useState("");

  const browse = useQuery({
    queryKey: ["hadith", collectionId, section],
    queryFn: () => pageFn({ data: { collectionId, section } }),
  });
  const search = useQuery({
    queryKey: ["hadith-search", collectionId, query],
    queryFn: () => searchFn({ data: { collectionId, query } }),
    enabled: query.trim().length > 1,
  });
  const random = useQuery({ queryKey: ["hadith-random"], queryFn: () => randomFn(), enabled: false });

  const items = query.trim().length > 1 ? (search.data ?? []) : (browse.data ?? []);
  const loading = query.trim().length > 1 ? search.isLoading : browse.isLoading;

  return (
    <Layout>
      <PageHeader title={t("hadith.title")} subtitle={t("hadith.subtitle")} />
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="card-elevated flex flex-wrap items-center gap-3 p-4">
          <select
            value={collectionId}
            onChange={(e) => {
              setCollectionId(e.target.value);
              setSection(1);
            }}
            className="rounded-lg border border-input bg-background px-3 py-2 text-sm"
          >
            {COLLECTIONS.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          <select
            value={section}
            onChange={(e) => setSection(Number(e.target.value))}
            className="rounded-lg border border-input bg-background px-3 py-2 text-sm"
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((s) => (
              <option key={s} value={s}>
                {t("hadith.collections")} {s}
              </option>
            ))}
          </select>
          <Button variant="secondary" onClick={() => random.refetch()}>
            {t("hadith.random")}
          </Button>
        </div>

        <form
          className="mt-4 flex flex-col gap-2 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            setQuery(term);
          }}
        >
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder={t("hadith.searchPlaceholder")}
            className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
          />
          <Button type="submit" className="shrink-0">
            {t("common.search")}
          </Button>
        </form>

        {random.data && (
          <article className="card-elevated mt-6 border-gold/60 p-5">
            <p className="text-xs text-primary">
              {random.data.collection} #{random.data.hadithnumber}
            </p>
            <p className="mt-2 text-sm leading-relaxed">{random.data.text}</p>
          </article>
        )}

        {loading && <p className="mt-6 text-sm text-muted-foreground">{t("common.loading")}</p>}
        {(browse.isError || search.isError) && <p className="mt-6 text-sm text-destructive">{t("common.error")}</p>}
        {!loading && items.length === 0 && <p className="mt-6 text-sm text-muted-foreground">{t("common.noResults")}</p>}

        <div className="mt-6 space-y-3">
          {items.map((h) => (
            <article key={`${h.collectionId}-${h.hadithnumber}`} className="card-elevated p-5">
              <div className="flex items-center gap-2">
                <p className="text-xs text-primary">
                  {h.collection} #{h.hadithnumber}
                  {h.reference ? ` · ${h.reference}` : ""}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="ms-auto"
                  onClick={() => {
                    void navigator.clipboard.writeText(`${h.text}\n(${h.collection} #${h.hadithnumber})`);
                    toast.success(t("common.copied"));
                  }}
                >
                  {t("common.copy")}
                </Button>
              </div>
              {h.arabic && <p className="arabic mt-3 text-lg">{h.arabic}</p>}
              <p className="mt-3 text-sm leading-relaxed">{h.text}</p>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
}

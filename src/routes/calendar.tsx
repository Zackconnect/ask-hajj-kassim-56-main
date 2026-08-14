import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Layout, PageHeader } from "@/components/Layout";
import { getHijriDate } from "@/lib/islamic.functions";
import { ISLAMIC_EVENTS } from "@/lib/duas";
import { pick, useI18n } from "@/lib/i18n";

const MONTHS = [
  "Muharram",
  "Safar",
  "Rabi' al-Awwal",
  "Rabi' al-Thani",
  "Jumada al-Awwal",
  "Jumada al-Thani",
  "Rajab",
  "Sha'ban",
  "Ramadan",
  "Shawwal",
  "Dhul-Qa'dah",
  "Dhul-Hijjah",
];

export const Route = createFileRoute("/calendar")({
  head: () => ({
    meta: [
      { title: "Islamic Calendar — Hijri Date & Key Days — Ask Sheikh Hajj Kassim" },
      { name: "description", content: "Today's Hijri and Gregorian date, the Islamic months, and key days including Ramadan, Eid, Arafah and Ashura." },
      { property: "og:title", content: "Islamic Calendar" },
      { property: "og:description", content: "Hijri date today plus important Islamic dates." },
    ],
  }),
  component: CalendarPage,
});

function CalendarPage() {
  const { t, lang } = useI18n();
  const fn = useServerFn(getHijriDate);
  const query = useQuery({ queryKey: ["hijri"], queryFn: () => fn() });

  return (
    <Layout>
      <PageHeader title={t("calendar.title")} subtitle={t("calendar.subtitle")} />
      <div className="mx-auto max-w-4xl space-y-8 px-4 py-10">
        <section className="card-elevated p-6">
          <h2 className="font-display text-xl">{t("calendar.today")}</h2>
          {query.isLoading && <p className="mt-2 text-sm text-muted-foreground">{t("common.loading")}</p>}
          {query.isError && <p className="mt-2 text-sm text-destructive">{t("common.error")}</p>}
          {query.data && (
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div>
                <p className="text-xs text-muted-foreground">{t("calendar.hijri")}</p>
                <p className="font-display text-lg">{query.data.hijri}</p>
                <p className="font-arabic text-lg text-primary">{query.data.hijriArabic}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{t("calendar.gregorian")}</p>
                <p className="font-display text-lg">{query.data.gregorian}</p>
              </div>
            </div>
          )}
        </section>

        <section>
          <h2 className="font-display text-xl">{t("calendar.title")}</h2>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {MONTHS.map((m, i) => (
              <div
                key={m}
                className={`card-elevated p-3 text-sm ${
                  query.data && query.data.hijriMonthNumber === i + 1 ? "border-gold" : ""
                }`}
              >
                <span className="text-muted-foreground">{i + 1}. </span>
                {m}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl">{t("calendar.events")}</h2>
          <ul className="mt-3 space-y-2">
            {ISLAMIC_EVENTS.map((e, i) => (
              <li key={i} className="card-elevated flex flex-wrap items-center gap-2 p-4 text-sm">
                <span className="font-medium">{pick(e.name, lang)}</span>
                <span className="ms-auto text-muted-foreground">{pick(e.date, lang)}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}

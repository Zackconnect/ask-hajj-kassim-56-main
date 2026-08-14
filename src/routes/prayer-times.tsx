import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Layout, PageHeader } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { getMonthlyPrayerTimes, getPrayerTimes } from "@/lib/islamic.functions";
import { useI18n } from "@/lib/i18n";

const ORDER = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];

export const Route = createFileRoute("/prayer-times")({
  head: () => ({
    meta: [
      { title: "Prayer Times — Fajr to Isha — Ask Sheikh Hajj Kassim" },
      { name: "description", content: "Daily and monthly prayer times for your city, with current and next prayer and countdown." },
      { property: "og:title", content: "Prayer Times" },
      { property: "og:description", content: "Accurate Fajr, Dhuhr, Asr, Maghrib and Isha times for your location." },
    ],
  }),
  component: PrayerPage,
});

function PrayerPage() {
  const { t } = useI18n();
  const timesFn = useServerFn(getPrayerTimes);
  const monthFn = useServerFn(getMonthlyPrayerTimes);
  const [city, setCity] = useState("Accra");
  const [country, setCountry] = useState("Ghana");
  const [method, setMethod] = useState(3);
  const [applied, setApplied] = useState({ city: "Accra", country: "Ghana", method: 3 });

  const times = useQuery({
    queryKey: ["times", applied],
    queryFn: () => timesFn({ data: applied }),
  });
  const monthly = useQuery({
    queryKey: ["times-month", applied],
    queryFn: () => monthFn({ data: applied }),
  });

  const timings = times.data?.timings;
  const now = new Date();
  const toDate = (v: string) => {
    const [h, m] = v.slice(0, 5).split(":");
    const d = new Date(now);
    d.setHours(Number(h), Number(m), 0, 0);
    return d;
  };
  const main = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
  let current = "";
  let next = "";
  let remaining = "";
  if (timings) {
    for (const p of main) {
      const v = timings[p];
      if (v && toDate(v) <= now) current = p;
    }
    next = main.find((p) => {
      const v = timings[p];
      return v ? toDate(v) > now : false;
    }) ?? "Fajr";
    const nv = timings[next];
    if (nv) {
      let diff = toDate(nv).getTime() - now.getTime();
      if (diff < 0) diff += 24 * 3600 * 1000;
      const hours = Math.floor(diff / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      remaining = `${hours}h ${mins}m`;
    }
  }

  return (
    <Layout>
      <PageHeader title={t("prayer.title")} subtitle={t("prayer.subtitle")} />
      <div className="mx-auto max-w-4xl px-4 py-10">
        <form
          className="card-elevated flex flex-wrap items-end gap-3 p-4"
          onSubmit={(e) => {
            e.preventDefault();
            setApplied({ city: city.trim() || "Accra", country: country.trim() || "Ghana", method });
          }}
        >
          <label className="text-sm">
            <span className="block text-muted-foreground">{t("prayer.city")}</span>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              maxLength={60}
              className="mt-1 rounded-lg border border-input bg-background px-3 py-2"
            />
          </label>
          <label className="text-sm">
            <span className="block text-muted-foreground">{t("prayer.country")}</span>
            <input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              maxLength={60}
              className="mt-1 rounded-lg border border-input bg-background px-3 py-2"
            />
          </label>
          <label className="text-sm">
            <span className="block text-muted-foreground">{t("prayer.method")}</span>
            <select
              value={method}
              onChange={(e) => setMethod(Number(e.target.value))}
              className="mt-1 rounded-lg border border-input bg-background px-3 py-2"
            >
              <option value={3}>Muslim World League</option>
              <option value={2}>ISNA</option>
              <option value={4}>Umm al-Qura</option>
              <option value={5}>Egyptian General Authority</option>
              <option value={1}>University of Karachi</option>
            </select>
          </label>
          <Button type="submit">{t("prayer.update")}</Button>
        </form>

        {times.isLoading && <p className="mt-6 text-sm text-muted-foreground">{t("common.loading")}</p>}
        {times.isError && <p className="mt-6 text-sm text-destructive">{t("common.error")}</p>}

        {times.data && (
          <>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="card-elevated p-4">
                <p className="text-xs text-muted-foreground">{t("prayer.current")}</p>
                <p className="font-display text-xl">{current || "—"}</p>
              </div>
              <div className="card-elevated p-4">
                <p className="text-xs text-muted-foreground">{t("prayer.next")}</p>
                <p className="font-display text-xl">{next}</p>
              </div>
              <div className="card-elevated p-4">
                <p className="text-xs text-muted-foreground">{t("prayer.countdown")}</p>
                <p className="font-display text-xl">{remaining}</p>
              </div>
            </div>

            <div className="card-elevated mt-4 p-5">
              <p className="text-sm text-muted-foreground">
                {t("prayer.location")}: {applied.city}, {applied.country} · {times.data.meta.timezone} ·{" "}
                {times.data.meta.method}
              </p>
              <p className="text-sm text-muted-foreground">{times.data.date.hijri}</p>
              <ul className="mt-4 divide-y divide-border">
                {ORDER.map((p) => (
                  <li key={p} className="flex items-center justify-between py-2">
                    <span className="font-medium">{p}</span>
                    <span className="font-display text-lg">{timings?.[p]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {monthly.data && (
          <section className="mt-8">
            <h2 className="font-display text-xl">{t("prayer.monthly")}</h2>
            <div className="card-elevated mt-3 overflow-x-auto p-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-start text-muted-foreground">
                    <th className="p-2 text-start">{t("calendar.gregorian")}</th>
                    <th className="p-2">Fajr</th>
                    <th className="p-2">Dhuhr</th>
                    <th className="p-2">Asr</th>
                    <th className="p-2">Maghrib</th>
                    <th className="p-2">Isha</th>
                  </tr>
                </thead>
                <tbody>
                  {monthly.data.map((d) => (
                    <tr key={d.gregorian} className="border-t border-border">
                      <td className="p-2">{d.gregorian}</td>
                      <td className="p-2 text-center">{d.fajr}</td>
                      <td className="p-2 text-center">{d.dhuhr}</td>
                      <td className="p-2 text-center">{d.asr}</td>
                      <td className="p-2 text-center">{d.maghrib}</td>
                      <td className="p-2 text-center">{d.isha}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
}

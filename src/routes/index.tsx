import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ask Sheikh Hajj Kassim — Qur'an, Hadith, Hajj & Islamic Knowledge" },
      {
        name: "description",
        content:
          "Multilingual Islamic companion: full Qur'an (114 Surahs), Hadith, Five Pillars, Hajj & Umrah guides, prayer times, Qibla, Duas and Islamic calendar in English, Hausa, Twi and Arabic.",
      },
      { property: "og:title", content: "Ask Sheikh Hajj Kassim — Ask. Learn. Understand. Live Islam." },
      {
        property: "og:description",
        content: "Authentic Islamic knowledge in English, Hausa, Twi and Arabic — Qur'an, Hadith, Hajj, Duas and more.",
      },
    ],
  }),
  component: Index,
});

const QUICK = [
  { to: "/quran", icon: "📖", key: "nav.quran" },
  { to: "/hadith", icon: "📜", key: "nav.hadith" },
  { to: "/pillars", icon: "🕌", key: "nav.pillars" },
  { to: "/hajj", icon: "🕋", key: "nav.hajj" },
  { to: "/prayer-times", icon: "🕐", key: "nav.prayer" },
  { to: "/duas", icon: "🤲", key: "nav.duas" },
  { to: "/qibla", icon: "🧭", key: "nav.qibla" },
  { to: "/calendar", icon: "📅", key: "nav.calendar" },
] as const;

function Index() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");

  return (
    <Layout>
      <section className="hero-surface pattern-geometric">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:py-24">
          <p className="font-arabic text-2xl opacity-90">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
          <h1 className="mt-6 font-display text-4xl sm:text-6xl">{t("home.heroTitle")}</h1>
          <p className="mt-4 text-base opacity-90 sm:text-lg">{t("home.heroSubtitle")}</p>
          <p className="mt-2 text-sm uppercase tracking-widest opacity-80">{t("app.tagline")}</p>

          <form
            className="mx-auto mt-8 flex max-w-2xl flex-col gap-2 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              navigate({ to: "/ask", search: { q: question || undefined } });
            }}
          >
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              maxLength={1000}
              placeholder={t("home.askPlaceholder")}
              className="w-full rounded-xl border border-transparent bg-card px-4 py-3 text-foreground shadow-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <Button type="submit" size="lg" variant="secondary" className="shrink-0">
              {t("home.askButton")}
            </Button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-display text-2xl">{t("home.quickLinks")}</h2>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {QUICK.map((q) => (
            <Link key={q.to} to={q.to} className="card-elevated hover:card-elevated-hover flex flex-col gap-2 p-4">
              <span className="text-2xl">{q.icon}</span>
              <span className="text-sm font-medium">{t(q.key)}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-16 md:grid-cols-3">
        {[
          { to: "/quran", title: "home.exploreQuran", body: "home.exploreQuranBody" },
          { to: "/ask", title: "home.askQuestion", body: "home.askQuestionBody" },
          { to: "/hajj", title: "home.learnHajj", body: "home.learnHajjBody" },
        ].map((c) => (
          <Link key={c.to} to={c.to} className="card-elevated hover:card-elevated-hover block p-6">
            <h3 className="font-display text-xl">{t(c.title)}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t(c.body)}</p>
            <span className="mt-4 inline-block text-sm font-medium text-primary">{t("common.readMore")} →</span>
          </Link>
        ))}
      </section>
    </Layout>
  );
}

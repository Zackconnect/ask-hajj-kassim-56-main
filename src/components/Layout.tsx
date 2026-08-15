import { Link } from "@tanstack/react-router";
import { Menu, Globe } from "lucide-react";
import { useState, type ReactNode } from "react";
import { LANGUAGES, useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

// Force Vercel redeploy

const NAV = [
  { to: "/", key: "nav.home" },
  { to: "/quran", key: "nav.quran" },
  { to: "/hadith", key: "nav.hadith" },
  { to: "/ask", key: "nav.ask" },
  { to: "/pillars", key: "nav.pillars" },
  { to: "/hajj", key: "nav.hajj" },
  { to: "/prayer-times", key: "nav.prayer" },
  { to: "/qibla", key: "nav.qibla" },
  { to: "/duas", key: "nav.duas" },
  { to: "/names", key: "nav.names" },
  { to: "/calendar", key: "nav.calendar" },
] as const;

export function LanguageSelector() {
  const { lang, setLang } = useI18n();
  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-card px-2 py-1">
      <Globe className="h-4 w-4 text-muted-foreground" />
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          className={`rounded-full px-2 py-0.5 text-xs font-medium transition-colors ${
            lang === l.code ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent"
          }`}
        >
          {l.native}
        </button>
      ))}
    </div>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const { t, dir } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <div dir={dir} className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-card/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl hero-surface font-display text-lg">
              ☪
            </span>
            <span className="hidden font-display text-base leading-tight sm:block">{t("app.name")}</span>
          </Link>
          <nav className="ms-auto hidden flex-wrap items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "bg-accent text-accent-foreground" }}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
          <div className="ms-auto hidden lg:ms-2 lg:block">
            <LanguageSelector />
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((v) => !v)} aria-label={t("nav.menu")}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        {open && (
          <div className="border-t border-border bg-card px-4 py-3 lg:hidden">
            <div className="grid grid-cols-2 gap-2">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm hover:bg-accent"
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
            <div className="mt-3">
              <LanguageSelector />
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground">
          <p className="font-display text-base text-foreground">{t("app.name")}</p>
          <p className="mt-1">{t("app.tagline")}</p>
          <p className="mt-3">{t("footer.note")}</p>
          <p className="mt-3">
            © {new Date().getFullYear()} {t("app.name")}. {t("footer.rights")}
          </p>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="hero-surface pattern-geometric">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <h1 className="font-display text-3xl sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-2 max-w-2xl text-sm opacity-90 sm:text-base">{subtitle}</p>}
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { z } from "zod";
import { Layout, PageHeader } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { askQuestion } from "@/lib/ask.functions";
import { LANGUAGES, useI18n, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/ask")({
  validateSearch: z.object({ q: z.string().max(1000).optional() }),
  head: () => ({
    meta: [
      { title: "Ask Sheikh — Islamic Questions Answered — Ask Sheikh Hajj Kassim" },
      {
        name: "description",
        content: "Ask questions about Salah, Wudu, fasting, Zakat, Hajj, halal and haram, and receive educational answers with Qur'an and Hadith evidence.",
      },
      { property: "og:title", content: "Ask Sheikh — Islamic Questions Answered" },
      { property: "og:description", content: "Educational Islamic answers in English, Hausa, Twi and Arabic." },
    ],
  }),
  component: AskPage,
});

function AskPage() {
  const { t, lang } = useI18n();
  const { q } = Route.useSearch();
  const [question, setQuestion] = useState(q ?? "");
  const [answerLang, setAnswerLang] = useState<Lang>(lang);
  const ask = useServerFn(askQuestion);

  const mutation = useMutation({
    mutationFn: (vars: { question: string; lang: Lang }) => ask({ data: vars }),
  });

  const result = mutation.data;

  return (
    <Layout>
      <PageHeader title={t("ask.title")} subtitle={t("ask.subtitle")} />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <form
          className="card-elevated p-5"
          onSubmit={(e) => {
            e.preventDefault();
            if (question.trim().length < 3) return;
            mutation.mutate({ question: question.trim(), lang: answerLang });
          }}
        >
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            maxLength={1000}
            rows={4}
            placeholder={t("ask.placeholder")}
            className="w-full resize-none rounded-xl border border-input bg-background p-4 text-base outline-none focus:ring-2 focus:ring-ring"
          />
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <label className="text-sm text-muted-foreground">{t("ask.responseLanguage")}</label>
            <select
              value={answerLang}
              onChange={(e) => setAnswerLang(e.target.value as Lang)}
              className="rounded-lg border border-input bg-background px-3 py-2 text-sm"
            >
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.native}
                </option>
              ))}
            </select>
            <Button type="submit" className="ms-auto" disabled={mutation.isPending}>
              {mutation.isPending ? t("ask.thinking") : t("ask.submit")}
            </Button>
          </div>
        </form>

        {mutation.isError && <p className="mt-6 text-sm text-destructive">{t("common.error")}</p>}

        {result && (
          <div className="mt-6 space-y-4">
            {[
              { label: t("ask.answer"), value: result.answer },
              { label: t("ask.quranEvidence"), value: result.quranEvidence },
              { label: t("ask.hadithEvidence"), value: result.hadithEvidence },
              { label: t("ask.explanation"), value: result.explanation },
              { label: t("common.source"), value: result.source },
            ]
              .filter((s) => s.value)
              .map((s) => (
                <section key={s.label} className="card-elevated p-5">
                  <h2 className="font-display text-lg text-primary">{s.label}</h2>
                  <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed">{s.value}</p>
                </section>
              ))}
            {result.differences && (
              <section className="rounded-xl border border-gold/60 bg-cream p-5">
                <p className="text-sm">{result.differences}</p>
              </section>
            )}
          </div>
        )}

        <p className="mt-8 rounded-xl border border-border bg-muted p-4 text-sm text-muted-foreground">
          {t("ask.disclaimer")}
        </p>
      </div>
    </Layout>
  );
}

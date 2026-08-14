import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { Layout, PageHeader } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { getQiblaDirection } from "@/lib/islamic.functions";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/qibla")({
  head: () => ({
    meta: [
      { title: "Qibla Direction & Compass — Ask Sheikh Hajj Kassim" },
      { name: "description", content: "Find the Qibla direction towards the Ka'bah in Makkah from your location, with distance and compass." },
      { property: "og:title", content: "Qibla Direction & Compass" },
      { property: "og:description", content: "Accurate Qibla bearing and distance to Makkah." },
    ],
  }),
  component: QiblaPage,
});

function QiblaPage() {
  const { t } = useI18n();
  const fn = useServerFn(getQiblaDirection);
  const [result, setResult] = useState<{ bearing: number; distanceKm: number } | null>(null);
  const [heading, setHeading] = useState<number | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const handler = (e: DeviceOrientationEvent) => {
      const anyEvent = e as DeviceOrientationEvent & { webkitCompassHeading?: number };
      const value = anyEvent.webkitCompassHeading ?? (e.alpha !== null ? 360 - e.alpha : null);
      if (value !== null && value !== undefined) setHeading(value);
    };
    window.addEventListener("deviceorientation", handler, true);
    return () => window.removeEventListener("deviceorientation", handler, true);
  }, []);

  const locate = () => {
    setError("");
    if (!navigator.geolocation) {
      setError(t("qibla.permission"));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const data = await fn({
            data: { latitude: pos.coords.latitude, longitude: pos.coords.longitude },
          });
          setResult(data);
        } catch {
          setError(t("common.error"));
        }
      },
      () => setError(t("qibla.permission")),
    );
  };

  const rotation = result ? result.bearing - (heading ?? 0) : 0;

  return (
    <Layout>
      <PageHeader title={t("qibla.title")} subtitle={t("qibla.subtitle")} />
      <div className="mx-auto max-w-2xl px-4 py-10 text-center">
        <Button onClick={locate}>{t("qibla.enable")}</Button>
        {error && <p className="mt-4 text-sm text-destructive">{error}</p>}

        {result && (
          <>
            <div className="card-elevated mx-auto mt-8 flex h-64 w-64 items-center justify-center rounded-full">
              <div
                className="flex h-56 w-56 items-center justify-center rounded-full border-4 border-border transition-transform duration-300"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                <div className="flex flex-col items-center">
                  <span className="text-3xl">🕋</span>
                  <span className="mt-1 h-24 w-0.5 bg-primary" />
                </div>
              </div>
            </div>
            <p className="mt-6 font-display text-2xl">
              {t("qibla.direction")}: {result.bearing}°
            </p>
            <p className="text-sm text-muted-foreground">
              {t("qibla.distance")}: {result.distanceKm.toLocaleString()} km
            </p>
            {heading === null && <p className="mt-4 text-sm text-muted-foreground">{t("qibla.noCompass")}</p>}
          </>
        )}
      </div>
    </Layout>
  );
}

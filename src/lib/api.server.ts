const QURAN_BASE = "https://api.alquran.cloud/v1";
const ALADHAN_BASE = "https://api.aladhan.com/v1";
const HADITH_BASE = "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1";

async function getJson<T>(url: string): Promise<T> {
  const res = await fetch(url, { headers: { accept: "application/json" } });
  if (!res.ok) throw new Error(`Upstream request failed (${res.status})`);
  return (await res.json()) as T;
}

/* ---------------- Qur'an ---------------- */

export type SurahMeta = {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
};

export async function fetchSurahList(): Promise<SurahMeta[]> {
  const data = await getJson<{ data: SurahMeta[] }>(`${QURAN_BASE}/surah`);
  return data.data;
}

export type Ayah = {
  number: number;
  numberInSurah: number;
  text: string;
  page?: number;
  juz?: number;
};

export type SurahDetail = {
  meta: SurahMeta;
  arabic: Ayah[];
  translation: Ayah[] | null;
  translationEdition: { identifier: string; name: string; language: string } | null;
  audioBase: string;
};

// Verified translation editions available upstream. Twi has no verified
// Qur'an translation available, so it is intentionally absent.
export const TRANSLATION_EDITIONS: Record<string, { id: string; name: string; language: string }> = {
  "en.sahih": { id: "en.sahih", name: "Saheeh International (English)", language: "en" },
  "en.pickthall": { id: "en.pickthall", name: "Pickthall (English)", language: "en" },
  "en.yusufali": { id: "en.yusufali", name: "Yusuf Ali (English)", language: "en" },
  "ha.gumi": { id: "ha.gumi", name: "Abubakar Mahmoud Gumi (Hausa)", language: "ha" },
};

export async function fetchSurah(number: number, edition: string | null): Promise<SurahDetail> {
  const arabicRes = await getJson<{ data: SurahMeta & { ayahs: Ayah[] } }>(`${QURAN_BASE}/surah/${number}/quran-uthmani`);

  let translation: Ayah[] | null = null;
  let translationEdition: SurahDetail["translationEdition"] = null;
  const known = edition ? TRANSLATION_EDITIONS[edition] : null;
  if (known) {
    try {
      const res = await getJson<{ data: { ayahs: Ayah[] } }>(`${QURAN_BASE}/surah/${number}/${known.id}`);
      translation = res.data.ayahs;
      translationEdition = { identifier: known.id, name: known.name, language: known.language };
    } catch {
      translation = null;
    }
  }

  const { ayahs, ...meta } = arabicRes.data;
  return {
    meta,
    arabic: ayahs,
    translation,
    translationEdition,
    audioBase: "https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy",
  };
}

export type QuranSearchMatch = {
  surahNumber: number;
  surahEnglishName: string;
  surahArabicName: string;
  numberInSurah: number;
  text: string;
};

export async function searchQuranText(query: string): Promise<QuranSearchMatch[]> {
  const data = await getJson<{
    data: {
      count: number;
      matches: {
        numberInSurah: number;
        text: string;
        surah: { number: number; englishName: string; name: string };
      }[];
    };
  }>(`${QURAN_BASE}/search/${encodeURIComponent(query)}/all/en.sahih`);

  return (data.data?.matches ?? []).slice(0, 40).map((m) => ({
    surahNumber: m.surah.number,
    surahEnglishName: m.surah.englishName,
    surahArabicName: m.surah.name,
    numberInSurah: m.numberInSurah,
    text: m.text,
  }));
}

/* ---------------- Hadith ---------------- */

export const HADITH_COLLECTIONS = [
  { id: "bukhari", edition: "eng-bukhari", name: "Sahih al-Bukhari" },
  { id: "muslim", edition: "eng-muslim", name: "Sahih Muslim" },
  { id: "abudawud", edition: "eng-abudawud", name: "Sunan Abu Dawud" },
  { id: "tirmidhi", edition: "eng-tirmidhi", name: "Jami' at-Tirmidhi" },
  { id: "nasai", edition: "eng-nasai", name: "Sunan an-Nasa'i" },
  { id: "ibnmajah", edition: "eng-ibnmajah", name: "Sunan Ibn Majah" },
  { id: "malik", edition: "eng-malik", name: "Muwatta Malik" },
  { id: "nawawi", edition: "eng-nawawi", name: "40 Hadith Nawawi" },
  { id: "qudsi", edition: "eng-qudsi", name: "40 Hadith Qudsi" },
];

export type HadithItem = {
  collection: string;
  collectionId: string;
  hadithnumber: number;
  text: string;
  arabic?: string | undefined;
  reference?: string | undefined;
};

type HadithSection = {
  metadata: { name: string; section?: Record<string, string> };
  hadiths: { hadithnumber: number; arabicnumber?: number; text: string; reference?: { book: number; hadith: number } }[];
};

async function fetchHadithSection(edition: string, section: number): Promise<HadithSection> {
  return getJson<HadithSection>(`${HADITH_BASE}/editions/${edition}/sections/${section}.min.json`);
}

export async function fetchHadithPage(collectionId: string, section: number): Promise<HadithItem[]> {
  const col = HADITH_COLLECTIONS.find((c) => c.id === collectionId) ?? HADITH_COLLECTIONS[0]!;
  const data = await fetchHadithSection(col.edition, section);
  let arabicByNumber = new Map<number, string>();
  try {
    const ara = await fetchHadithSection(col.edition.replace("eng-", "ara-"), section);
    arabicByNumber = new Map(ara.hadiths.map((h) => [h.hadithnumber, h.text]));
  } catch {
    /* Arabic edition unavailable for this collection */
  }
  return data.hadiths.slice(0, 60).map((h) => ({
    collection: col.name,
    collectionId: col.id,
    hadithnumber: h.hadithnumber,
    text: h.text,
    arabic: arabicByNumber.get(h.hadithnumber),
    reference: h.reference ? `Book ${h.reference.book}, Hadith ${h.reference.hadith}` : undefined,
  }));
}

export async function searchHadith(collectionId: string, query: string): Promise<HadithItem[]> {
  const col = HADITH_COLLECTIONS.find((c) => c.id === collectionId) ?? HADITH_COLLECTIONS[0]!;
  const needle = query.toLowerCase();
  const results: HadithItem[] = [];
  for (let section = 1; section <= 12 && results.length < 25; section++) {
    try {
      const data = await fetchHadithSection(col.edition, section);
      for (const h of data.hadiths) {
        if (h.text.toLowerCase().includes(needle)) {
          results.push({
            collection: col.name,
            collectionId: col.id,
            hadithnumber: h.hadithnumber,
            text: h.text,
            reference: h.reference ? `Book ${h.reference.book}, Hadith ${h.reference.hadith}` : undefined,
          });
          if (results.length >= 25) break;
        }
      }
    } catch {
      break;
    }
  }
  return results;
}

export async function fetchRandomHadith(): Promise<HadithItem> {
  const col = HADITH_COLLECTIONS[Math.floor(Math.random() * 4)]!;
  const section = 1 + Math.floor(Math.random() * 8);
  const data = await fetchHadithSection(col.edition, section);
  const pick = data.hadiths[Math.floor(Math.random() * data.hadiths.length)]!;
  return {
    collection: col.name,
    collectionId: col.id,
    hadithnumber: pick.hadithnumber,
    text: pick.text,
    reference: pick.reference ? `Book ${pick.reference.book}, Hadith ${pick.reference.hadith}` : undefined,
  };
}

/* ---------------- Prayer times / calendar / qibla / names ---------------- */

export type PrayerTimesResult = {
  timings: Record<string, string>;
  date: { readable: string; hijri: string; gregorian: string };
  meta: { timezone: string; method: string; latitude: number; longitude: number };
};

export async function fetchPrayerTimes(city: string, country: string, method: number): Promise<PrayerTimesResult> {
  const url = `${ALADHAN_BASE}/timingsByCity?city=${encodeURIComponent(city)}&country=${encodeURIComponent(
    country,
  )}&method=${method}`;
  const data = await getJson<{
    data: {
      timings: Record<string, string>;
      date: { readable: string; hijri: { date: string; month: { en: string }; year: string }; gregorian: { date: string } };
      meta: { timezone: string; method: { name: string }; latitude: number; longitude: number };
    };
  }>(url);
  const d = data.data;
  return {
    timings: d.timings,
    date: {
      readable: d.date.readable,
      hijri: `${d.date.hijri.date} (${d.date.hijri.month.en} ${d.date.hijri.year} AH)`,
      gregorian: d.date.gregorian.date,
    },
    meta: {
      timezone: d.meta.timezone,
      method: d.meta.method.name,
      latitude: d.meta.latitude,
      longitude: d.meta.longitude,
    },
  };
}

export async function fetchMonthlyTimes(city: string, country: string, method: number) {
  const now = new Date();
  const url = `${ALADHAN_BASE}/calendarByCity/${now.getFullYear()}/${now.getMonth() + 1}?city=${encodeURIComponent(
    city,
  )}&country=${encodeURIComponent(country)}&method=${method}`;
  const data = await getJson<{
    data: { timings: Record<string, string>; date: { gregorian: { date: string }; hijri: { date: string } } }[];
  }>(url);
  return data.data.map((d) => ({
    gregorian: d.date.gregorian.date,
    hijri: d.date.hijri.date,
    fajr: d.timings['Fajr'] ?? "",
    dhuhr: d.timings['Dhuhr'] ?? "",
    asr: d.timings['Asr'] ?? "",
    maghrib: d.timings['Maghrib'] ?? "",
    isha: d.timings['Isha'] ?? "",
  }));
}

export async function fetchHijriToday() {
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, "0");
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const data = await getJson<{
    data: {
      hijri: { date: string; day: string; month: { en: string; ar: string; number: number }; year: string; weekday: { en: string } };
      gregorian: { date: string; weekday: { en: string }; month: { en: string } };
    };
  }>(`${ALADHAN_BASE}/gToH/${dd}-${mm}-${now.getFullYear()}`);
  const h = data.data.hijri;
  return {
    hijri: `${h.day} ${h.month.en} ${h.year} AH`,
    hijriArabic: `${h.day} ${h.month.ar} ${h.year} هـ`,
    hijriMonthNumber: h.month.number,
    hijriYear: h.year,
    gregorian: `${data.data.gregorian.weekday.en}, ${data.data.gregorian.date}`,
  };
}

export type NameOfAllah = { number: number; name: string; transliteration: string; meaning: string };

export async function fetchNinetyNineNames(): Promise<NameOfAllah[]> {
  const data = await getJson<{
    data: { number: number; name: string; transliteration: string; en: { meaning: string } }[];
  }>(`${ALADHAN_BASE}/asmaAlHusna`);
  return data.data.map((n) => ({
    number: n.number,
    name: n.name,
    transliteration: n.transliteration,
    meaning: n.en.meaning,
  }));
}

const KAABA = { lat: 21.4224779, lng: 39.625845 };

export function computeQibla(lat: number, lng: number) {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const toDeg = (r: number) => (r * 180) / Math.PI;
  const dLng = toRad(KAABA.lng - lng);
  const y = Math.sin(dLng);
  const x = Math.cos(toRad(lat)) * Math.tan(toRad(KAABA.lat)) - Math.sin(toRad(lat)) * Math.cos(dLng);
  const bearing = (toDeg(Math.atan2(y, x)) + 360) % 360;

  const R = 6371;
  const dLat = toRad(KAABA.lat - lat);
  const a =
    Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat)) * Math.cos(toRad(KAABA.lat)) * Math.sin(dLng / 2) ** 2;
  const distance = 2 * R * Math.asin(Math.sqrt(a));

  return { bearing: Math.round(bearing * 100) / 100, distanceKm: Math.round(distance) };
}

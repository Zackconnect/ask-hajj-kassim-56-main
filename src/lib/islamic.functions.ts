import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import {
  computeQibla,
  fetchHadithPage,
  fetchHijriToday,
  fetchMonthlyTimes,
  fetchNinetyNineNames,
  fetchPrayerTimes,
  fetchRandomHadith,
  fetchSurah,
  fetchSurahList,
  searchHadith,
  searchQuranText,
} from "./api.server";

export const getSurahList = createServerFn({ method: "GET" }).handler(async () => fetchSurahList());

export const getSurah = createServerFn({ method: "GET" })
  .validator((data: unknown) =>
    z.object({ number: z.number().int().min(1).max(114), edition: z.string().nullable() }).parse(data),
  )
  .handler(async ({ data }) => fetchSurah(data.number, data.edition));

export const searchQuran = createServerFn({ method: "GET" })
  .validator((data: unknown) => z.object({ query: z.string().trim().min(2).max(80) }).parse(data))
  .handler(async ({ data }) => searchQuranText(data.query));

export const getHadithPage = createServerFn({ method: "GET" })
  .validator((data: unknown) =>
    z.object({ collectionId: z.string().max(30), section: z.number().int().min(1).max(60) }).parse(data),
  )
  .handler(async ({ data }) => fetchHadithPage(data.collectionId, data.section));

export const findHadith = createServerFn({ method: "GET" })
  .validator((data: unknown) =>
    z.object({ collectionId: z.string().max(30), query: z.string().trim().min(2).max(80) }).parse(data),
  )
  .handler(async ({ data }) => searchHadith(data.collectionId, data.query));

export const getRandomHadith = createServerFn({ method: "GET" }).handler(async () => fetchRandomHadith());

export const getPrayerTimes = createServerFn({ method: "GET" })
  .validator((data: unknown) =>
    z
      .object({
        city: z.string().trim().min(1).max(60),
        country: z.string().trim().min(1).max(60),
        method: z.number().int().min(0).max(23),
      })
      .parse(data),
  )
  .handler(async ({ data }) => fetchPrayerTimes(data.city, data.country, data.method));

export const getMonthlyPrayerTimes = createServerFn({ method: "GET" })
  .validator((data: unknown) =>
    z
      .object({
        city: z.string().trim().min(1).max(60),
        country: z.string().trim().min(1).max(60),
        method: z.number().int().min(0).max(23),
      })
      .parse(data),
  )
  .handler(async ({ data }) => fetchMonthlyTimes(data.city, data.country, data.method));

export const getHijriDate = createServerFn({ method: "GET" }).handler(async () => fetchHijriToday());

export const getNamesOfAllah = createServerFn({ method: "GET" }).handler(async () => fetchNinetyNineNames());

export const getQiblaDirection = createServerFn({ method: "GET" })
  .validator((data: unknown) =>
    z.object({ latitude: z.number().min(-90).max(90), longitude: z.number().min(-180).max(180) }).parse(data),
  )
  .handler(async ({ data }) => computeQibla(data.latitude, data.longitude));

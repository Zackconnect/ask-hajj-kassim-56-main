import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { askSheikh } from "./ask.server";

export const askQuestion = createServerFn({ method: "POST" })
  .validator((data: unknown) =>
    z
      .object({
        question: z.string().trim().min(3).max(1000),
        lang: z.enum(["en", "ha", "tw", "ar"]),
      })
      .parse(data),
  )
  .handler(async ({ data }) => askSheikh(data.question, data.lang));

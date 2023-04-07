import fetch from "cross-fetch";
import { router, publicProcedure } from "../trpc.js";
import type { CurrenciesData, HistoryData } from "./types";
import { TRPCError } from "@trpc/server";

const currencyRouter = router({
  getCurrencies: publicProcedure.query(async () => {
    const currencies = await fetch("https://api.coincap.io/v2/assets");
    return (await currencies.json()) as CurrenciesData;
  }),

  getCurrencyHistory: publicProcedure
    .input((id: unknown) => {
      if (typeof id === "string") return id;

      throw new TRPCError({
        code: "BAD_REQUEST",
        message: `Invalid input: ${typeof id}`,
      });
    })
    .query(async (req) => {
      const { input } = req;
      const currencyHistory = await fetch(
        `https://api.coincap.io/v2/assets/${input}/history?interval=d1`
      );
      return (await currencyHistory.json()) as HistoryData;
    }),
});

export default currencyRouter;

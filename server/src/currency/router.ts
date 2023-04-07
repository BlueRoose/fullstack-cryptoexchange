import { router, publicProcedure } from "../trpc.js";
import type { Currency, HistoryItem } from "./types";
import { TRPCError } from "@trpc/server";

const currencyRouter = router({
  getUsers: publicProcedure.query(() => {
    let currencies: Currency[] = [];
    fetch("https://api.coincap.io/v2/assets").then((responce) =>
      responce.json().then((data) => (currencies = data.data))
    );
    return currencies;
  }),

  getCurrencyHistory: publicProcedure
    .input((id: unknown) => {
      if (typeof id === "string") return id;

      throw new TRPCError({
        code: "BAD_REQUEST",
        message: `Invalid input: ${typeof id}`,
      });
    })
    .query((req) => {
      const { input } = req;
      let currencyHistory: HistoryItem[] = [];
      fetch(
        `https://api.coincap.io/v2/assets/${input}/history?interval=d1`
      ).then((responce) =>
        responce.json().then((data) => (currencyHistory = data.data))
      );

      return currencyHistory;
    }),
});

export default currencyRouter;

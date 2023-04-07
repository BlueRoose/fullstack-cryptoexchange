import { router } from "./trpc.js";
import currencyRouter from "./currency/router.js";

const appRouter = router({
  currency: currencyRouter,
});

export default appRouter;

import { inferAsyncReturnType } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
declare const createContext: ({ req, res, }: trpcExpress.CreateExpressContextOptions) => {};
export type Context = inferAsyncReturnType<typeof createContext>;
export default createContext;

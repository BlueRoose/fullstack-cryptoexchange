declare const appRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: {};
    meta: object;
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: import("@trpc/server").DefaultDataTransformer;
}>, {
    currency: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: {};
        meta: object;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: import("@trpc/server").DefaultDataTransformer;
    }>, {
        getUsers: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: {};
                meta: object;
                errorShape: import("@trpc/server").DefaultErrorShape;
                transformer: import("@trpc/server").DefaultDataTransformer;
            }>;
            _ctx_out: {};
            _input_in: typeof import("@trpc/server").unsetMarker;
            _input_out: typeof import("@trpc/server").unsetMarker;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
            _meta: object;
        }, import("./currency/types.js").Currency[]>;
        getCurrencyHistory: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: {};
                meta: object;
                errorShape: import("@trpc/server").DefaultErrorShape;
                transformer: import("@trpc/server").DefaultDataTransformer;
            }>;
            _meta: object;
            _ctx_out: {};
            _input_in: string;
            _input_out: string;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import("./currency/types.js").HistoryItem[]>;
    }>;
}>;
export default appRouter;

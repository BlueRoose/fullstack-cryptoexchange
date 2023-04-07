"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trpc_js_1 = require("../trpc.js");
const server_1 = require("@trpc/server");
const currencyRouter = (0, trpc_js_1.router)({
    getUsers: trpc_js_1.publicProcedure.query(() => {
        let currencies = [];
        fetch("https://api.coincap.io/v2/assets").then((responce) => responce.json().then((data) => (currencies = data.data)));
        return currencies;
    }),
    getCurrencyHistory: trpc_js_1.publicProcedure
        .input((id) => {
        if (typeof id === "string")
            return id;
        throw new server_1.TRPCError({
            code: "BAD_REQUEST",
            message: `Invalid input: ${typeof id}`,
        });
    })
        .query((req) => {
        const { input } = req;
        let currencyHistory = [];
        fetch(`https://api.coincap.io/v2/assets/${input}/history?interval=d1`).then((responce) => responce.json().then((data) => (currencyHistory = data.data)));
        return currencyHistory;
    }),
});
exports.default = currencyRouter;
//# sourceMappingURL=router.js.map
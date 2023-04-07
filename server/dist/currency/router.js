"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const trpc_js_1 = require("../trpc.js");
const server_1 = require("@trpc/server");
const currencyRouter = (0, trpc_js_1.router)({
    getCurrencies: trpc_js_1.publicProcedure.query(() => __awaiter(void 0, void 0, void 0, function* () {
        const currencies = yield (0, cross_fetch_1.default)("https://api.coincap.io/v2/assets");
        return (yield currencies.json());
    })),
    getCurrencyHistory: trpc_js_1.publicProcedure
        .input((id) => {
        if (typeof id === "string")
            return id;
        throw new server_1.TRPCError({
            code: "BAD_REQUEST",
            message: `Invalid input: ${typeof id}`,
        });
    })
        .query((req) => __awaiter(void 0, void 0, void 0, function* () {
        const { input } = req;
        const currencyHistory = yield (0, cross_fetch_1.default)(`https://api.coincap.io/v2/assets/${input}/history?interval=d1`);
        return (yield currencyHistory.json());
    })),
});
exports.default = currencyRouter;
//# sourceMappingURL=router.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const trpc_js_1 = require("./trpc.js");
const router_js_1 = __importDefault(require("./currency/router.js"));
const appRouter = (0, trpc_js_1.router)({
    currency: router_js_1.default,
});
exports.default = appRouter;
//# sourceMappingURL=router.js.map
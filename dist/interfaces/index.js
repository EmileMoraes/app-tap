"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_create_enpoint_1 = require("./user/user-create-enpoint");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/v1", user_create_enpoint_1.router);
// @ts-ignore
app.get("/", (req, res, next) => {
    // @ts-ignore
    res.status(200).json({ message: "Catch all route." });
});
exports.default = app;

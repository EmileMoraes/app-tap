"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_create_enpoint_1 = require("./user-create-enpoint");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use("/api/v1/", user_create_enpoint_1.router);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port} welcome`);
});
//TODO implementar teste unitario
//TODO separar mais as config de express do endpoint
//TODO fazer validacao dos campos obrigatorios usando o joi
//TODO logica de cpf e cnpj
//TODO implementar o swagger

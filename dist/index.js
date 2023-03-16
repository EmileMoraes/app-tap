"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/', (req, res) => {
    console.log('ok');
    res.send("hi");
});
// app.post('/api/v1/users', (req: Request, res: Response) => {
//     console.log(req.body);
//     console.log(req.body);
//     res.send(req.body);
// });
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port} welcome`);
});
//nome, email, senha, e cpf

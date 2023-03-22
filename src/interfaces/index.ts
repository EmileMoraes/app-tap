import express, { Express } from 'express';
import dotenv from 'dotenv';
import { router as userCreateEndpoint} from "./user-create-enpoint";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use("/api/v1/", userCreateEndpoint)

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port} welcome`);
});



//TODO implementar teste unitario
//TODO separar mais as config de express do endpoint
//TODO fazer validacao dos campos obrigatorios usando o joi
//TODO logica de cpf e cnpj
//TODO implementar o swagger
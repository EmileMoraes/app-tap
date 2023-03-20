import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    console.log('ok');
    res.send("hi");
});

app.post('/api/v1/users', (req: Request, res: Response) => {
    console.log(req.body);
    res.status(201).json({id: 1})
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port} welcome`);
});



//TODO implementar teste unitario
//TODO separar mais as config de express do endpoint
//TODO fazer validacao dos campos obrigatorios usando o joi
//TODO logica de cpf e cnpj
//TODO implementar o swagger
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
    res.send(req.body);
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port} welcome`);
});


//nome, email, senha, e cpf
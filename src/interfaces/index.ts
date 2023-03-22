import express, {Express, NextFunction} from 'express';
import dotenv from 'dotenv';
import { router as userCreateEndpoint} from "./user-create-enpoint";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use("/api/v1/", userCreateEndpoint);

// @ts-ignore
app.use("/", (req: Request, res: Response, next: NextFunction): void => {
    // @ts-ignore
    res.json({ message: "Catch all route." });
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port} welcome`);
});

export default app;
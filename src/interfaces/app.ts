import express, { NextFunction} from 'express';
import { router as userCreateEndpoint} from "./user/user-create-enpoint";

const app = express();

app.use(express.json());

app.use("/api/v1", userCreateEndpoint);
// @ts-ignore
app.get("/", (req: Request, res: Response, next: NextFunction): void => {
    // @ts-ignore
    res.status(200).json({ message: "Catch all route." });
});

export{ app } ;
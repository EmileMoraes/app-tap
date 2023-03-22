import {Request, Response, Router} from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send("hi");
});
router.post('/users', (req: Request, res: Response) => {
    console.log(req.body);
    res.status(201).json({id: 1})
});

export { router }
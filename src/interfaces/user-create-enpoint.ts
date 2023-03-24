import {Request, Response, Router} from "express";

const router = Router();

let user: [] = [];


router.get('/', (req: Request, res: Response) => {
    res.send("hi");
});
router.post('/users', (req: Request, res: Response) => {
    try {
        const { name, cpf, email, password } = req.body;
        let newUser = {name, cpf, email, password};

        // @ts-ignore
        user.push(newUser);
        console.log(user);
        res.status(201).json({data: 1})
    } catch (error) {
        return res.status(500).json({
            data: null,
            error: error,
        });
    }

});

export { router }
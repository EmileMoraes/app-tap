import {Request, Response, Router} from "express";
import Joi from "joi";
// @ts-ignore
import * as JoiCpfCnpj from "joi-cpf-cnpj";
import {validateUserCreateSchema} from "./shema/user-create";

const router = Router();

let user: [] = [];


router.get('/', (req: Request, res: Response) => {
    res.send("hi");
});
router.post('/users', async (req: Request, res: Response) => {
    try {
        const { name, cpf, cnpj, email, password } = req.body;
        let newUser = {name, cpf,cnpj, email, password};
       await validateUserCreateSchema(newUser);

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
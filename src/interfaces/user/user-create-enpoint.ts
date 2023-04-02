import {Request, Response, Router} from "express";
// @ts-ignore
import * as JoiCpfCnpj from "joi-cpf-cnpj";
import {validateUserCreateSchema} from "../../application/user-create-command";
import {UserRequest} from "./user-request";
import {UserCreateRequestMapper} from "./mapper/user-create-request-mapper";

const router = Router();

router.post('/users', async (req: Request, res: Response) => {
    try {
        const payload: UserRequest = req.body;
        const command = UserCreateRequestMapper.toCommand(payload);
        const user = await validateUserCreateSchema(command);

        res.status(201).json({data: 1})
    } catch (error) {
        return res.status(500).json({
            data: null,
            error: error,
        });
    }

});

export { router }
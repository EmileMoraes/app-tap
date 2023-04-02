import {Request, Response, Router} from "express";
// @ts-ignore
import * as JoiCpfCnpj from "joi-cpf-cnpj";
import {UserRequest} from "./user-request";
import {UserCreateRequestMapper} from "./mapper/user-create-request-mapper";
import {UserCreateUseCase} from "../../application/user-create-use-case";
import {UserCreateResponseMapper} from "./mapper/user-create-response-mapper";

const router = Router();

router.post('/users', async (req: Request, res: Response) => {
    try {
        const userCreateUseCase = new UserCreateUseCase();
        const payload: UserRequest = req.body;
        const command = UserCreateRequestMapper.toCommand(payload);
        const user = await userCreateUseCase.handle(command);
        const response = UserCreateResponseMapper.fromEntity(user);

        res.status(201).json(response);

    } catch (error) {
        return res.status(500).json({
            data: null,
            error: error,
        });
    }

});

export { router }
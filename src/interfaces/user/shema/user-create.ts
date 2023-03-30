import Joi from "joi";
// @ts-ignore
import * as JoiCpfCnpj from "joi-cpf-cnpj";
import {UserRequest} from "../user-request";
import {validateAndThrowExceptionIfInvalid} from "../../../error/joi-validation";

//const joiExtend = Joi.extend(JoiCpfCnpj);

const userCreateSchema = Joi.object({
    name: Joi.string().required(),
    //cpf: joiExtend.document().cpf(),
    cpf: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
}).unknown(true);

export function validateUserCreateSchema(userRequest: UserRequest): void {
    const { error } = userCreateSchema.validate(userRequest, { abortEarly: false });
    validateAndThrowExceptionIfInvalid(error);
}
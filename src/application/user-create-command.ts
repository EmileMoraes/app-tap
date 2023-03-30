import Joi from "joi";
// @ts-ignore
import * as JoiCpfCnpj from "joi-cpf-cnpj";
import {validateAndThrowExceptionIfInvalid} from "../error/joi-validation";
import validator from 'cpf-cnpj-validator';


export class UserCreateCommand {
    constructor(
        readonly name: string,
        readonly cpf: string | undefined,
        readonly cnpj: string | undefined,
        readonly email: string,
        readonly password: string){}
}

const joiValidator = Joi.extend(validator);

const userCreateSchema = Joi.object({
    name: Joi.string().required(),
    cpf: joiValidator.document().cpf(),
    cnpj: joiValidator.document().cnpj(),
    email: Joi.string().required(),
    password: Joi.string().required(),
}).unknown(true);

export function validateUserCreateSchema(userRequest: UserCreateCommand): void {
    const { error } = userCreateSchema.validate(userRequest, { abortEarly: false });
    validateAndThrowExceptionIfInvalid(error);
}
import Joi from "joi";
// @ts-ignore
import * as JoiCpfCnpj from "joi-cpf-cnpj";
import {UserRequest} from "../user-request";
import {validateAndThrowExceptionIfInvalid} from "../../../error/joi-validation";
import validator, {cpf} from 'cpf-cnpj-validator';

const joiValidator = Joi.extend(validator);

const userCreateSchema = Joi.object({
    name: Joi.string().required(),
    cpf: joiValidator.document().cpf().required(),
    cnpj: joiValidator.document().cnpj(),
    email: Joi.string().required(),
    password: Joi.string().required(),
}).unknown(true);

export function validateUserCreateSchema(userRequest: UserRequest): void {
    const { error } = userCreateSchema.validate(userRequest, { abortEarly: false });
    validateAndThrowExceptionIfInvalid(error);
}
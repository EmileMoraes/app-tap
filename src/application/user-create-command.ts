import Joi from 'joi';
import { validateAndThrowExceptionIfInvalid } from '../error/joi-validation';
import validator from 'cpf-cnpj-validator';

export class UserCreateCommand {
  constructor(
    readonly name: string,
    readonly cpf: string | undefined,
    readonly cnpj: string | undefined,
    readonly email: string,
    readonly password: string
  ) {}
}

const joiValidator = Joi.extend(validator);

const userCreateSchema = Joi.object({
  name: Joi.string().required(),
  cpf: joiValidator.document().cpf(),
  cnpj: joiValidator.document().cnpj(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,20}$')).required()
}).unknown(true);

export function validateUserCreateSchema(userRequest: UserCreateCommand): void {
  const { error } = userCreateSchema.validate(userRequest, {
    abortEarly: false
  });
  validateAndThrowExceptionIfInvalid(error);
}

import Joi from 'joi';
import { validateAndThrowExceptionIfInvalid } from '../error/joi-validation';
import validator from 'cpf-cnpj-validator';
import { UserCreate } from '../domain/user-create';
import { UserLogin } from '../domain/user-login';

export class UserLoginCommand {
  constructor(readonly email: string, readonly password: string) {}
}

const userLoginSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,20}$')).required()
}).unknown(true);

export function validateUserLoginSchema(userLogin: {
  password: string | undefined;
  email: string | undefined;
}): void {
  const { error } = userLoginSchema.validate(userLogin, {
    abortEarly: false
  });
  validateAndThrowExceptionIfInvalid(error);
}

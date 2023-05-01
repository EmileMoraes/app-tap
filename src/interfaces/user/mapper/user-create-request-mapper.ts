import { UserRequest } from './user-request';
import { UserCreateCommand } from '../../../application/user-create-command';

export class UserCreateRequestMapper {
  static toCommand(userCreateResquet: UserRequest): UserCreateCommand {
    return new UserCreateCommand(
      userCreateResquet.name,
      userCreateResquet?.cpf,
      userCreateResquet?.cnpj,
      userCreateResquet.email,
      userCreateResquet.password
    );
  }
}

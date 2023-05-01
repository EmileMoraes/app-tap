import { UserResponse } from './user-response';
import { UserCreate } from '../../../domain/user-create';

export class UserCreateResponseMapper {
  static fromEntity(userCreateResponse: string | undefined): UserResponse {
    return <UserResponse>{ userId: userCreateResponse };
  }
}

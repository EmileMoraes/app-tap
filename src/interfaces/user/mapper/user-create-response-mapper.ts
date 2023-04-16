import { UserResponse } from '../user-response';
import { UserCreate } from '../../../domain/UserCreate';

export class UserCreateResponseMapper {
  static fromEntity(userCreateResponse: UserCreate): UserResponse {
    return { id: userCreateResponse.id };
  }
}

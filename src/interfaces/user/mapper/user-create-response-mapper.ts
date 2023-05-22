import { UserResponse } from './user-response';
import { UserCreate } from '../../../domain/user-create';

export class UserCreateResponseMapper {
  static fromEntity(userCreateResponse: UserCreate | undefined): UserResponse {
    return <UserResponse>{
      userId: userCreateResponse?.userId,
      name: userCreateResponse?.name,
      email: userCreateResponse?.email
    };
  }

  static fromEntities(entities: Array<UserCreate> | undefined): UserResponse[] {
    return entities.map((e) => this.fromEntity(e));
  }
}

import { UserCreate } from './user-create';
import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class UserRepository {
  abstract createUser(entity: UserCreate): Promise<string | undefined>;
  abstract findAll(): Promise<Array<UserCreate> | undefined>;

  abstract findById(userId: string): Promise<UserCreate | null>;
}

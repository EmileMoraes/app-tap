import {
  UserCreateCommand,
  validateUserCreateSchema
} from './user-create-command';
import { generateUserCreateId, UserCreate } from '../domain/user-create';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../domain/user-repository';
import { UserLogin } from '../domain/user-login';

@Injectable()
export class UserCreateUseCase {
  constructor(private userRepository: UserRepository) {}

  async handle(command: UserCreateCommand): Promise<UserCreate | undefined> {
    validateUserCreateSchema(command);
    const entity = {
      ...command,
      userId: generateUserCreateId()
    };
    console.log('use' + entity);
    await this.userRepository.createUser(entity);
    return entity;
  }

  async getAll() {
    return await this.userRepository.findAll();
  }

  async findById(userId: string): Promise<UserLogin | undefined> {
    const login = await this.userRepository.findById(userId);
    const user = {
      email: login?.email,
      password: login?.password
    };

    console.log(user + 'na use case');
    return user as UserLogin;
  }
}

import { Global, Module } from '@nestjs/common';
import { UserCreateUseCase } from '../../application/user-create-use-case';
import { UserController } from '../../interfaces/user/user-controller';
import { UserDynamodbAdapter } from '../../infrastructure/user/user-dynamodb-adapter';
import { UserRepository } from '../../domain/user-repository';

@Global()
@Module({
  controllers: [UserController],
  providers: [UserCreateUseCase, UserDynamodbAdapter],
  exports: [UserCreateUseCase]
})
export class UserModule {}

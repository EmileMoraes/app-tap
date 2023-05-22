import { Global, Module } from '@nestjs/common';
import { UserCreateUseCase } from '../../../application/user-create-use-case';
import { UserController } from '../../../interfaces/user/user-controller';
import { UserDynamodbAdapter } from '../../user/user-dynamodb-adapter';
import { UserRepository } from '../../../domain/user-repository';

@Global()
@Module({
  controllers: [UserController],
  providers: [
    UserCreateUseCase,
    {
      provide: UserRepository,
      useClass: UserDynamodbAdapter
    }
  ],
  exports: [UserCreateUseCase]
})
export class UserModule {}

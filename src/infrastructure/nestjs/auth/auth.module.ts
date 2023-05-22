import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { UserAuthUseCase } from '../../../application/user-auth-use-case';
import { UserAuthController } from '../../../interfaces/auth/user-auth-controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  controllers: [UserAuthController],
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' }
    })
  ],
  providers: [UserAuthUseCase],
  exports: [UserAuthUseCase]
})
export class AuthModule {}

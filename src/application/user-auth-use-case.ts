import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserCreateUseCase } from './user-create-use-case';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserAuthUseCase {
  constructor(
    private userCreateUseCase: UserCreateUseCase,
    private jwtService: JwtService
  ) {}

  async singIn(userId: string, pass: string): Promise<any> {
    const user = await this.userCreateUseCase.findById(userId);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { pass: user.password, email: user.email };
    console.log('Authentication');
    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }
}

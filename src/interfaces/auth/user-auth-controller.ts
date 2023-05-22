import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import { UserAuthUseCase } from '../../application/user-auth-use-case';
import { AuthGuard } from '../../infrastructure/nestjs/auth/auth.guard';

@Controller('/api/v2/auth')
export class UserAuthController {
  constructor(private readonly userAuthUseCase: UserAuthUseCase) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  public async signIn(@Body() user: Record<string, any>) {
    return await this.userAuthUseCase.singIn(user.userId, user.pass);
  }

  @UseGuards(AuthGuard)
  @Get('user')
  public async getUser(@Request() req) {
    return req?.userId;
  }
}

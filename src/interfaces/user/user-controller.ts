import { Response } from 'express';
import { UserRequest } from './mapper/user-request';
import { UserCreateRequestMapper } from './mapper/user-create-request-mapper';
import { UserCreateUseCase } from '../../application/user-create-use-case';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UseGuards
} from '@nestjs/common';
import { UserCreateResponseMapper } from './mapper/user-create-response-mapper';
import { UserCreate } from '../../domain/user-create';
import { AuthGuard } from '../../infrastructure/nestjs/auth/auth.guard';

@Controller('/api/v1/users')
export class UserController {
  constructor(private readonly userCreateUseCase: UserCreateUseCase) {}

  @Post('/')
  public async createUser(@Body() request: UserRequest, @Res() res: Response) {
    try {
      const command = UserCreateRequestMapper.toCommand(request);
      const user: UserCreate | undefined = await this.userCreateUseCase.handle(
        command
      );
      const result = UserCreateResponseMapper.fromEntity(user);

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({
        data: null,
        error: error
      });
    }
  }

  @UseGuards(AuthGuard)
  @Get('/getAll')
  public async getAllUsers(@Res() res: Response) {
    try {
      const users = await this.userCreateUseCase.getAll();
      const result = UserCreateResponseMapper.fromEntities(users);

      res.status(200).json(result);
    } catch (error) {
      res.status(400).json('Not exist users');
    }
  }

  @Get('/:userId')
  public async getById(@Param('userId') userId: string) {
    const users = await this.userCreateUseCase.findById(userId);
    console.log(users + ' no endpoint');
    return users;
  }

  @Get()
  getPort() {
    const port: string | undefined = process.env.NODE_ENV;
    return port;
  }
}

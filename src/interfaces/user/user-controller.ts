import { Response } from 'express';
import { UserRequest } from './mapper/user-request';
import { UserCreateRequestMapper } from './mapper/user-create-request-mapper';
//import { UserCreateUseCase } from '../../application/user-create-use-case';
import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { UserDynamodbAdapter } from '../../infrastructure/user/user-dynamodb-adapter';
import { UserCreateResponseMapper } from './mapper/user-create-response-mapper';

@Controller('/api/v1/users')
export class UserController {
  constructor(
    //private readonly userCreateUseCase: UserCreateUseCase,
    private readonly userFind: UserDynamodbAdapter
  ) {}

  @Post('/')
  public async createUser(@Body() request: UserRequest, @Res() res: Response) {
    try {
      const command = UserCreateRequestMapper.toCommand(request);
      //const user = await this.userCreateUseCase.handle(command);
      const user = await this.userFind.createUser(command);
      const result = UserCreateResponseMapper.fromEntity(user);

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({
        data: null,
        error: error
      });
    }
  }

  @Get('/getAll')
  public async getAllUsers() {
    return await this.userFind.findAll();
  }

  @Get()
  getPort() {
    const porta: string | undefined = process.env.NODE_ENV;
    return porta;
  }
}

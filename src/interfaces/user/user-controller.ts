import { Request, Response } from 'express';
import { UserRequest } from './user-request';
import { UserCreateRequestMapper } from './mapper/user-create-request-mapper';
import { UserCreateUseCase } from '../../application/user-create-use-case';
import { UserCreateResponseMapper } from './mapper/user-create-response-mapper';
import { Controller, Post, Req, Res } from '@nestjs/common';

@Controller('/users')
export class UserController {
  @Post('/')
  public async createUser(
    @Req() request: Request,
    @Res() res: Response
  ): Promise<void> {
    try {
      const userCreateUseCase = new UserCreateUseCase();
      const payload: UserRequest = request.body;
      const command = UserCreateRequestMapper.toCommand(payload);
      const user = await userCreateUseCase.handle(command);
      const response = UserCreateResponseMapper.fromEntity(user);

      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({
        data: null,
        error: error
      });
    }
  }
}

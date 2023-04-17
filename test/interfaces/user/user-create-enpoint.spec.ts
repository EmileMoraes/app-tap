// @ts-ignore
import request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { UserModule } from '../../../src/interfaces/user/user.module';

describe('UserCreateEndpoint', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [UserModule]
    }).compile();
    app = await moduleRef.createNestApplication();
    await app.init();
    await app.listen(3001);
  });

  afterAll(async () => {
    app.close();
  });

  it('should call users endpoint', async () => {
    const userPayload = {
      name: 'Teste',
      cpf: '972.145.630-61',
      email: 'teste@teste.com',
      password: 'Abc123456'
    };
    await request('http://127.0.0.1:3001')
      .post('/users/')
      .send(userPayload)
      .then((response) => {
        expect(response.body.id).toBeTruthy();
        expect(response.statusCode).toBe(201);
      });
  });
});

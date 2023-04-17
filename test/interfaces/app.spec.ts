// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import request from 'supertest';
import { app } from '../../src/interfaces/app';

describe('Test for index', () => {
  it('should call all route', async () => {
    await request(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual('teste');
      });
  });

  it('should call users endpoint', async () => {
    const userPayload = {
      name: 'Teste',
      cpf: '972.145.630-61',
      email: 'teste@teste.com',
      password: 'Abc123456'
    };
    await request(app)
      .post('/api/v1/users')
      .send(userPayload)
      .then((response) => {
        expect(response.body.id).toBeTruthy();
        expect(response.statusCode).toBe(201);
      });
  });
});

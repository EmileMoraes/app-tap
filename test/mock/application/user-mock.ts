import { UserResponse } from '../../../src/interfaces/user/mapper/user-response';

export const userCreated = {
  id: '3b7ba437-4dd8-4401-88bc-508e09452b2e',
  name: 'test',
  cpf: '54271113107',
  cnpj: '38313108000107',
  email: 'email@g.com',
  password: '1234567A'
};
export const userCreatedResponse: UserResponse = {
  userId: userCreated.id
};

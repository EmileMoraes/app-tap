import { v4 as uuidv4 } from 'uuid';

export type UserCreate = {
  userId: string;
  name: string;
  cpf?: string;
  cnpj?: string;
  email: string;
  password: string;
};
export function generateUserCreateId(): string {
  return uuidv4();
}

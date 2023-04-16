import { validateUserCreateSchema } from '../../src/application/user-create-command';
import {
  userCreateInvalid,
  userCreateValid
} from '../mock/interfaces/user/user-create-mock';

describe('userCreateCommand', () => {
  it('should validate user create schema and return successfully', async () => {
    expect(() => validateUserCreateSchema(userCreateValid)).not.toThrow();
  });

  it('should invalidate user create schema, when invalid body and return error', async () => {
    expect(() => validateUserCreateSchema(userCreateInvalid)).toThrow();
  });
});

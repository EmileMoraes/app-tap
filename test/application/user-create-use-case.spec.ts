import { UserCreateUseCase } from '../../src/application/user-create-use-case';
import {
  userCreated,
  userCreatedResponse
} from '../mock/application/user-mock';

describe('UserCreateUseCase', () => {
  it('should create a new user', async () => {
    jest.mock('../../src/application/user-create-use-case', () => {
      return {
        handle: jest.fn()
      };
    });

    const mockUserCreate = UserCreateUseCase as jest.Mock<UserCreateUseCase>;
    const mockService = jest
      .spyOn(mockUserCreate.prototype, 'handle')
      .mockImplementation((source) => {
        return 'test';
      });

    expect(mockService).toHaveBeenCalled();

    // const userCreateUseCase = new UserCreateUseCase();
    // userCreateUseCase.handle.mockResolvedValueOnce(userCreated);
    // const newUser = await userCreateUseCase.handle(userCreated);
    //expect(newUser).toEqual(userCreatedResponse.userId);
  });
});

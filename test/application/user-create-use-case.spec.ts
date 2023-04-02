import {UserCreateUseCase} from "../../src/application/user-create-use-case";
// @ts-ignore
import {userCreated, userCreatedResponse} from "../mock/application/user-mock";

describe('UserCreateUseCase', ()=> {
    it('should create a new user', async ()=> {
        const userCreateUseCase = new UserCreateUseCase();
        const newUser = await userCreateUseCase.handle(userCreated);
        expect(newUser).toEqual(userCreated);
        expect(newUser.id).toEqual(userCreatedResponse.id);
    });
})
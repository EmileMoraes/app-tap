import {UserCreateCommand, validateUserCreateSchema} from "./user-create-command";
import {generateUserCreateId, UserCreate} from "../domain/UserCreate";

export class UserCreateUseCase {
    async handle(command: UserCreateCommand): Promise<UserCreate> {
        validateUserCreateSchema(command);
        const createUser: UserCreate = {
            id: generateUserCreateId(),
                ...command
        };
        return createUser;
    }
}
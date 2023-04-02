import {UserResponse} from "../../../src/interfaces/user/user-response";

export const userCreated = {
    id: '0e4c6b88-8092-4130-b45f-de7a2b11763a',
    name: "test",
    cpf: "54271113107",
    cnpj: "38313108000107",
    email: "email@g.com",
    password: "1234567A"
}
export const userCreatedResponse: UserResponse = {
    id: userCreated.id
}
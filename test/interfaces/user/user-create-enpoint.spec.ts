import request from 'supertest';
import {app} from '../../../src/interfaces/app';
// @ts-ignore
import {userCreateInvalid, userCreateValid} from "../../mock/interfaces/user/user-create-mock";
// @ts-ignore
import {userCreated, userCreatedResponse} from "../../mock/application/user-mock";

describe("UserCreateEndpoint", () => {

    it("should create a new user", async() => {
        const response = await request(app)
            .post("/api/v1/users")
            .send(userCreateValid)
            .expect(201);
    });

    it("should returns 500 status code with invalid user", async() => {
        const error = new Error('Internal Server Error');
        const response = await request(app)
            .post("/api/v1/users")
            .send(userCreateInvalid)
            .expect(500);
    });
})

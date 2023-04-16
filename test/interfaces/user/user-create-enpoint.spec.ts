// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import request from 'supertest';
import {app} from '../../../src/interfaces/app';
import {userCreateInvalid, userCreateValid} from "../../mock/interfaces/user/user-create-mock";

describe("UserCreateEndpoint", () => {

    it("should create a new user", async () => {
        await request(app)
            .post("/api/v1/users")
            .send(userCreateValid)
            .expect(201);
    });

    it("should returns 500 status code with invalid user", async () => {
        new Error('Internal Server Error');
        await request(app)
            .post("/api/v1/users")
            .send(userCreateInvalid)
            .expect(500);
    });
})

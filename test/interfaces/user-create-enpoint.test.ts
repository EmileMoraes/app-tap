// @ts-ignore
import request from 'supertest';
import index from '../../src/interfaces/index'
// @ts-ignore
import express, { response} from "express";
import * as bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const userCreate = {
        name: "test",
        cpf: "1234",
        email: "email@g.com",
        password: "123"
    }
describe("UserCreateEndpoint", () => {
    test("Create user", async() => {

        const user = await request(index).post("/api/v1/users").send(userCreate);
        expect(response.status(201));

    })
})
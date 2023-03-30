// @ts-ignore
import request from 'supertest';
import index from '../../../src/interfaces'
// @ts-ignore
import express, { response} from "express";
import * as bodyParser from "body-parser";
// @ts-ignore
import {userCreate} from '../../mock/interfaces/user/user-create-mock';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
describe("UserCreateEndpoint", () => {
    it("Create user", async() => {

        const user = await request(index).post("/api/v1/users").send(userCreate);
        expect(response.status(201));

    })
})
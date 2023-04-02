// @ts-ignore
import request from 'supertest';
import {app} from '../../src/interfaces/app'
import {Server} from "http";
import {router as userCreateEndpoint} from "../../src/interfaces/user/user-create-enpoint";

let server: Server

describe('Test for index', () => {
    beforeEach(() => {
        server = app.listen(4000)
    })
    afterEach(async () => {
        await server.close();
    })

    it('should call all route', async ()=> {
        const res = await request(server).get("/")
            .then((response) => {
                expect(response.statusCode).toBe(200);
            });
    });

    it('app should use userCreateEndpoint router', () => {
        const router = require('../../src/interfaces/user/user-create-enpoint').router;
        const app = require('../../src/interfaces/app').app;
        // @ts-ignore
        const useSpy = jest.spyOn(app, 'use', userCreateEndpoint);
        expect(useSpy).toHaveBeenCalledWith('/api/v1', router);
    });


})


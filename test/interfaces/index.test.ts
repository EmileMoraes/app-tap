// @ts-ignore
import request from 'supertest';
import index from '../../src/interfaces/index'
import {Server} from "http";

let server: Server

describe('Test for index', () => {
    beforeEach(() => {
        server = index.listen(4000)
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

})


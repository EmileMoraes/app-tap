// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import request from 'supertest';
import {app} from '../../src/interfaces/app'

describe('Test for index', () => {

    it('should call all route', async ()=> {
         await request(app).get("/")
            .then((response) => {
                expect(response.statusCode).toBe(200);
            });
    });
})


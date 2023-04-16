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

    // it('app should use userCreateEndpoint router', () => {
    //     const router = require('../../src/interfaces/user/user-create-enpoint');
    //     const app = require('../../src/interfaces/app');
    //     // @ts-ignore
    //     const useSpy = jest.spyOn(app,  userCreateEndpoint);
    //     expect(useSpy).toHaveBeenCalledWith('/api/v1', router);
    // });


})


import request from 'supertest';
import index from '../../src/interfaces/index'

describe('Test for index', () => {

    test('should call all route', async() => {
        const res = await request(index).get("/api/v1/");
        expect(res.body).toEqual({ message: "Catch all route." });
    });

    // test('should call user route', async() => {
    //     const res = await request(index).get("/");
    //     expect(res.body).toEqual({ message: "hi" });
    // });

})


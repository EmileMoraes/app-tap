import {validateUserCreateSchema} from "../../../../src/interfaces/user/shema/user-create";
// @ts-ignore
import {userCreateInvalid, userCreateValid} from "../../../mock/interfaces/user/user-create-mock";

describe('userCreateSchema', ()=> {
    it('should validate user create schema and return successfully', async () =>{
        expect(() => validateUserCreateSchema(userCreateValid)).not.toThrow();
    });

    it('should invalidate user create schema, when invalid body and return error', async () =>{
        // @ts-ignore
        expect(() => validateUserCreateSchema(userCreateInvalid)).toThrow();
    });
})
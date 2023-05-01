import { UserRepository } from '../../domain/user-repository';
import { dynamoDBClient } from '../aws/aws-config';
import { generateUserCreateId, UserCreate } from '../../domain/user-create';
import { Injectable } from '@nestjs/common';
import { UserCreateCommand } from '../../application/user-create-command';

@Injectable()
export class UserDynamodbAdapter implements UserRepository {
  //async createUser(entity: UserCreate): Promise<string | undefined> {
  async createUser(entity: UserCreateCommand): Promise<string | undefined> {
    const userId = generateUserCreateId();
    try {
      const params = {
        TableName: 'users',
        Item: {
          //userId: entity.userId,
          userId: userId,
          name: entity.name,
          cpf: entity.cpf,
          cnpj: entity.cnpj,
          email: entity.email,
          password: entity.password
        }
      };
      const response = await dynamoDBClient().put(params).promise();
      console.log('Successfully ' + response);
      return params.Item.userId;
    } catch (error) {
      console.log('Error', error);
    }
  }

  async findAll() {
    const results = await dynamoDBClient()
      .scan({
        TableName: 'users'
      })
      .promise();

    return results.Items;
  }
}

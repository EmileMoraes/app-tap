import { UserRepository } from '../../domain/user-repository';
import { dynamoDBClient } from '../aws/aws-config';
import { generateUserCreateId, UserCreate } from '../../domain/user-create';
import { UserLogin } from '../../domain/user-login';

export class UserDynamodbAdapter implements UserRepository {
  async createUser(entity: UserCreate): Promise<string | undefined> {
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

  async findAll(): Promise<UserCreate[] | undefined> {
    const { Items } = await dynamoDBClient()
      .scan({
        TableName: 'users'
      })
      .promise();
    const users = Items?.map((i) => i as UserCreate);

    return users;
  }

  async findById(userId: string): Promise<UserCreate | null> {
    try {
      const params = {
        TableName: 'users',
        ExpressionAttributeNames: {
          '#userId': 'userId'
        },
        ExpressionAttributeValues: { ':userId': userId },
        KeyConditionExpression: '#userId = :userId'
      };
      const { Items } = await dynamoDBClient().query(params).promise();
      const result = Items?.length > 0 ? (Items[0] as UserCreate) : null;

      console.log(result?.email, result?.password + ' in adapter');

      return result;
    } catch (e) {
      console.log('Error', e);
    }
  }
}

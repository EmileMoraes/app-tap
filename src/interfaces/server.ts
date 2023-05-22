import dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../infrastructure/nestjs/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

dotenv.config();

//const port = Number(process.env.PORT || 3001);

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(3000);
}
bootstrap();

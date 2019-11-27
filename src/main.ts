import { NestFactory } from '@nestjs/core';
import * as dontenv from 'dotenv';
import { AppModule } from './app.module';

dontenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

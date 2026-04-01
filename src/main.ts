import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()).enableCors({
    origin: 'http://localhost:3000',
  });
  //app.useGlobalFilters(new DatabaseExceptionFilter());
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();

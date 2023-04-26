import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import RuntimeExceptionFilter from './filters/RuntimeExceptionFilter';
import { HttpExceptionFilter } from './filters/HttpExceptionFilter';
import { DataSource } from 'typeorm';
import { runSeedServices } from './seeds/platforms.seed';
// import { Log } from './log';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    //TODO: Improve the logs as they don't show the stack traces
    // logger: new Log(),
  });
  const connection = app.get(DataSource);
  await runSeedServices(connection);

  const config = new DocumentBuilder()
    .setTitle('Striight API')
    .setDescription('The striight api')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new RuntimeExceptionFilter());
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(4000);
}
bootstrap();

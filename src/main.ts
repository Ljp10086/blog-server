import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
// * 加载配置文件
import * as dotenvExpand from 'dotenv-expand';
import * as dotenv from 'dotenv';
dotenvExpand.expand(dotenv.config());
// * 需要在配置文件之后加载
import { AppModule } from './app.module';
import { log } from './middlewares/log.middleware';
import { HttpExceptionFilter } from './filters/http-exception.filter';

const swaggerInit = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle(process.env.SWAGGER_TITLE)
    .setDescription(process.env.SWAGGER_DESC)
    .setVersion(process.env.npm_config_init_version)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser('12345'));
  // * 异常处理
  app.useGlobalFilters(new HttpExceptionFilter());
  // 日志
  app.use(log);
  app.useGlobalPipes(new ValidationPipe());
  swaggerInit(app);
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT);
}

bootstrap();

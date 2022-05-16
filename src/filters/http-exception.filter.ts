import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { logger } from '../middlewares/log.middleware';

// 全局异常处理器
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const expRes: any = exception.getResponse();
    const status = exception.getStatus();
    const path = request.url;
    logger.error(
      `接口【${path}】【${request.method}】请求报错，状态码为【${status} \n`,
      `接口【${path}】【${request.method}】请求报错，信息为【${JSON.stringify(
        expRes,
        null,
        2,
      )}】`,
    );

    response.status(status).send(expRes);
  }
}

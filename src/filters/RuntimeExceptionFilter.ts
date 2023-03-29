import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { RuntimeException } from '@nestjs/core/errors/exceptions';

@Catch(RuntimeException)
export default class RuntimeExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response: Response = ctx.getResponse<Response>();

    response.status(500).send('Oops');
  }
}

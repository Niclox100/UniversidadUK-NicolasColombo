import { Injectable, HttpStatus, HttpException } from '@nestjs/common';

import {
  ValidationError,
  ValidationPipe,
  ValidationPipeOptions,
} from '@nestjs/common';

@Injectable()
export class CustomValidationPipe extends ValidationPipe {
  constructor(options?: ValidationPipeOptions) {
    super({
      ...options,
      ...{
        exceptionFactory: (errors: ValidationError[]) => {
          const message = errors.map((error) => {
            const details = Object.values(error.constraints).map((message) => {
              return message.replaceAll(`${error.property} `, '');
            });

            return {
              field: error.property,
              details,
            };
          });

          throw new HttpException(
            {
              message,
              code: 'INVALID_PARAMS',
              generic: false,
              error: 'Bad Request',
              statusCode: HttpStatus.BAD_REQUEST,
            },
            HttpStatus.BAD_REQUEST,
          );
        },
      },
    });
  }
}

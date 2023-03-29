import { HttpException, HttpStatus } from '@nestjs/common';

export default class UserException extends HttpException {
  constructor(
    message: UserExceptionMessage,
    statusCode: number = HttpStatus.BAD_REQUEST,
  ) {
    super({ message }, statusCode);
  }
}

export const USER_ALREADY_EXISTS = 'User already exists' as const;
export const USER_NOT_FOUND = 'User not found' as const;

export type UserExceptionMessage =
  | typeof USER_ALREADY_EXISTS
  | typeof USER_NOT_FOUND;

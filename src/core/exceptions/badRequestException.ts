import { BaseException } from './baseException';

export class BadRequestException extends BaseException {
  public constructor(message: string) {
    super(message);
  }
}

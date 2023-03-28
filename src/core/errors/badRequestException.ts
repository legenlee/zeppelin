import { BaseError } from './baseError';

export class BadRequestException extends BaseError {
  public constructor(message: string) {
    super(message);
  }
}

import { BaseError } from './baseError';

export class NotFoundException extends BaseError {
  public constructor(message: string) {
    super(message);
  }
}

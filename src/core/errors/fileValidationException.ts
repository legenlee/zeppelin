import { BaseError } from './baseError';

export class FileValidationException extends BaseError {
  public constructor(message: string) {
    super(message);
  }

  public get name() {
    return this.constructor.name;
  }
}

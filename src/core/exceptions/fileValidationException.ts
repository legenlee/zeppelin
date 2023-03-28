import { BaseException } from './baseException';

export class FileValidationException extends BaseException {
  public constructor(message: string) {
    super(message);
  }

  public get name() {
    return this.constructor.name;
  }
}

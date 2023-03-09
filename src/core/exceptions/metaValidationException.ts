import { BaseException } from './baseException';

export class MetaValidationException extends BaseException {
  public constructor(message: string) {
    super(message);
  }
}

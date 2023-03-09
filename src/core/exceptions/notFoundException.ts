import { BaseException } from './baseException';

export class NotFoundException extends BaseException {
  public constructor(message: string) {
    super(message);
  }
}

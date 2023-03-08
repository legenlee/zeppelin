import { BaseException } from './baseException';

export class NotFoundException extends BaseException {
  public constructor(message = 'No installed instance is found.') {
    super(message);
  }
}

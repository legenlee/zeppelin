import { BaseException } from './baseException';

export class UnhandledException extends BaseException {
  public constructor(message = 'Unhandled exception has thrown.') {
    super(message);
  }
}

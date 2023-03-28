import { BaseError } from './baseError';

export class UnhandledException extends BaseError {
  public constructor(message = 'Unhandled exception has thrown.') {
    super(message);
  }
}

import { Constants } from 'core/common/constants';

export abstract class BaseError extends Error {
  protected constructor(message: string) {
    super(`[${Constants.IDENTIFIER}]: ${message}`);
    this.name = this.constructor.name;
  }
}

import { BaseError } from './baseError';

export class NetworkError extends BaseError {
  public readonly statusCode: number;

  public constructor(
    message: string,
    statusCode: string | number,
    stack?: string
  ) {
    super(message);
    this.stack = stack;
    this.statusCode =
      typeof statusCode === 'string' ? parseInt(statusCode) : statusCode;
  }
}

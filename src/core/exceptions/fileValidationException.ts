import { BaseException } from './baseException';

export class FileValidationException extends BaseException {
  private readonly _type: string;

  protected constructor(message: string, type: string) {
    super(message);
    this._type = type;
  }

  public get type() {
    return this._type;
  }
}

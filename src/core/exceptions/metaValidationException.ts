import { FileValidationException } from './fileValidationException';

export class MetaValidationException extends FileValidationException {
  public constructor(message: string) {
    super(message, 'meta');
  }
}

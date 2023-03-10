import { FileValidationException } from './fileValidationException';

export class VersionValidationException extends FileValidationException {
  public constructor(message: string) {
    super(message);
  }
}

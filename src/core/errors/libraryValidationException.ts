import { FileValidationException } from './fileValidationException';

export class LibraryValidationException extends FileValidationException {
  private _failed: string[];

  public constructor(failed: string[]) {
    const tail = failed.length > 1 ? 'libraries are' : 'library is';
    const message = `Validation of ${
      failed.length
    } ${tail} failed. List: ${failed.join('\n')}`;

    super(message);
    this._failed = failed;
  }

  public get failed() {
    return this._failed;
  }
}

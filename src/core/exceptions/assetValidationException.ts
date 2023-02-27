import { BaseException } from './baseException';

export class AssetValidationException extends BaseException {
  private _failed: string[];

  public constructor(failed: string[]) {
    const tail = failed.length > 1 ? 'assets are' : 'asset is';
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

export class LaunchOptions {
  private _minMemory: number;
  private _maxMemory: number;

  public constructor(minMemory = 512, maxMemory = 1024) {
    this._minMemory = minMemory;
    this._maxMemory = maxMemory;
  }

  public get minMemory() {
    return this._minMemory;
  }

  public get maxMemory() {
    return this._maxMemory;
  }
}

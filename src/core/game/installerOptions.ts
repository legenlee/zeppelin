export class InstallerOptions {
  private _baseDirectory: string;

  public constructor(baseDirectory: string) {
    this._baseDirectory = baseDirectory;
  }

  public get baseDirectory() {
    return this._baseDirectory;
  }
}

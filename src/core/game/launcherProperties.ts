export class LauncherProperties {
  private _versionId: string;
  private _metasPath: string;
  private _assetsPath: string;
  private _librariesPath: string;

  public constructor(
    versionId: string,
    metasPath: string,
    assetsPath: string,
    librariesPath: string
  ) {
    this._versionId = versionId;
    this._metasPath = metasPath;
    this._assetsPath = assetsPath;
    this._librariesPath = librariesPath;
  }

  public get versionId() {
    return this._versionId;
  }

  public get metasPath() {
    return this._metasPath;
  }

  public get assetsPath() {
    return this._assetsPath;
  }

  public get librariesPath() {
    return this._librariesPath;
  }
}

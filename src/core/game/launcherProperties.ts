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

  public setVersionId(value: string): this {
    this._versionId = value;
    return this;
  }

  public setMetasPath(value: string): this {
    this._metasPath = value;
    return this;
  }

  public setAssetsPath(value: string): this {
    this._assetsPath = value;
    return this;
  }

  public setLibrariesPath(value: string): this {
    this._librariesPath = value;
    return this;
  }
}

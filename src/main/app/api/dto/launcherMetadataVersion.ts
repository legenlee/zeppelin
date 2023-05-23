export class LauncherMetadataVersion {
  private _id: string;
  private _type: string;
  private _url: string;
  private _time: string;
  private _releaseTime: string;
  private _sha1: string;
  private _compilanceLevel: string;

  private constructor(
    id: string,
    type: string,
    url: string,
    time: string,
    releaseTime: string,
    sha1: string,
    compilanceLevel: string
  ) {
    this._id = id;
    this._type = type;
    this._url = url;
    this._time = time;
    this._releaseTime = releaseTime;
    this._sha1 = sha1;
    this._compilanceLevel = compilanceLevel;
  }

  public get id(): string {
    return this._id;
  }

  public get type(): string {
    return this._type;
  }

  public get url(): string {
    return this._url;
  }

  public get time(): string {
    return this._time;
  }

  public get releaseTime(): string {
    return this._releaseTime;
  }

  public get sha1(): string {
    return this._sha1;
  }

  public get compilanceLevel(): string {
    return this._compilanceLevel;
  }

  public static fromJSON(
    json: Record<string, unknown>
  ): LauncherMetadataVersion {
    return new LauncherMetadataVersion(
      json.id as string,
      json.type as string,
      json.url as string,
      json.time as string,
      json.releaseTime as string,
      json.sha1 as string,
      json.compilanceLevel as string
    );
  }

  public toJSON(): Record<string, unknown> {
    return {
      id: this._id,
      type: this._type,
      url: this._url,
      time: this._time,
      releaseTime: this._releaseTime,
      sha1: this._sha1,
      compilanceLevel: this._compilanceLevel,
    };
  }
}

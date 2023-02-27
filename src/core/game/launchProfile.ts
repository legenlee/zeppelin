export class LaunchProfile {
  private _offline: boolean;
  private _uuid: string;
  private _username: string;
  private _accessToken?: string;

  public constructor(
    offline: boolean,
    uuid: string,
    username: string,
    accessToken?: string
  ) {
    this._offline = offline;
    this._uuid = uuid;
    this._username = username;
    this._accessToken = accessToken;
  }

  public get offline() {
    return this._offline;
  }

  public get uuid() {
    return this._uuid;
  }

  public get username() {
    return this._username;
  }

  public get accessToken() {
    return this._accessToken;
  }
}

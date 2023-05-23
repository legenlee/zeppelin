export class LauncherMetadataLatestDto {
  private _release: string;
  private _snapshot: string;

  private constructor(release: string, snapshot: string) {
    this._release = release;
    this._snapshot = snapshot;
  }

  public get release(): string {
    return this._release;
  }

  public get snapshot(): string {
    return this._snapshot;
  }

  public static fromJSON(
    json: Record<string, unknown>
  ): LauncherMetadataLatestDto {
    return new LauncherMetadataLatestDto(
      json.release as string,
      json.snapshot as string
    );
  }

  public toJSON(): Record<string, unknown> {
    return {
      release: this._release,
      snapshot: this._snapshot,
    };
  }
}

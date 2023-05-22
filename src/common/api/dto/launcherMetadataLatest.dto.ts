export class LauncherMetadataLatestDto {
  public release: string;
  public snapshot: string;

  private constructor(release: string, snapshot: string) {
    this.release = release;
    this.snapshot = snapshot;
  }

  public static fromJSON(
    json: Record<string, unknown>
  ): LauncherMetadataLatestDto {
    return new LauncherMetadataLatestDto(
      json.release as string,
      json.snapshot as string
    );
  }
}

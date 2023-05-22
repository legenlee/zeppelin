export class LauncherMetadataVersionDto {
  public id: string;
  public type: string;
  public url: string;
  public time: string;
  public releaseTime: string;
  public sha1: string;
  public compilanceLevel: string;

  private constructor(
    id: string,
    type: string,
    url: string,
    time: string,
    releaseTime: string,
    sha1: string,
    compilanceLevel: string
  ) {
    this.id = id;
    this.type = type;
    this.url = url;
    this.time = time;
    this.releaseTime = releaseTime;
    this.sha1 = sha1;
    this.compilanceLevel = compilanceLevel;
  }

  public static fromJSON(
    json: Record<string, unknown>
  ): LauncherMetadataVersionDto {
    return new LauncherMetadataVersionDto(
      json.id as string,
      json.type as string,
      json.url as string,
      json.time as string,
      json.releaseTime as string,
      json.sha1 as string,
      json.compilanceLevel as string
    );
  }
}

import { LauncherMetadataLatestDto } from './launcherMetadataLatest.dto';
import { LauncherMetadataVersionDto } from './launcherMetadataVersion.dto';

export class LauncherMetadataResponseDto {
  private _latest: LauncherMetadataLatestDto;
  private _versions: LauncherMetadataVersionDto[];

  private constructor(
    latest: LauncherMetadataLatestDto,
    versions: LauncherMetadataVersionDto[]
  ) {
    this._latest = latest;
    this._versions = versions;
  }

  public get latest(): LauncherMetadataLatestDto {
    return this._latest;
  }

  public get versions(): LauncherMetadataVersionDto[] {
    return this._versions;
  }

  public static fromJSON(
    json: Record<string, unknown>
  ): LauncherMetadataResponseDto {
    return new LauncherMetadataResponseDto(
      LauncherMetadataLatestDto.fromJSON(
        json.latest as Record<string, unknown>
      ),
      (json.versions as Record<string, unknown>[]).map((version) =>
        LauncherMetadataVersionDto.fromJSON(version)
      )
    );
  }

  public toJSON(): Record<string, unknown> {
    return {
      latest: this._latest.toJSON(),
      versions: this._versions.map((version) => version.toJSON()),
    };
  }
}

import { LauncherMetadataLatestDto } from './launcherMetadataLatest.dto';
import { LauncherMetadataVersionDto } from './launcherMetadataVersion.dto';

export class LauncherMetadataResponseDto {
  public latest: LauncherMetadataLatestDto;
  public versions: LauncherMetadataVersionDto[];

  private constructor(
    latest: LauncherMetadataLatestDto,
    versions: LauncherMetadataVersionDto[]
  ) {
    this.latest = latest;
    this.versions = versions;
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
}

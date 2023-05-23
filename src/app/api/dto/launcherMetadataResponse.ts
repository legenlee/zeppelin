import { LauncherMetadataLatest } from './launcherMetadataLatest';
import { LauncherMetadataVersion } from './launcherMetadataVersion';

export class LauncherMetadataResponse {
  private _latest: LauncherMetadataLatest;
  private _versions: LauncherMetadataVersion[];

  private constructor(
    latest: LauncherMetadataLatest,
    versions: LauncherMetadataVersion[]
  ) {
    this._latest = latest;
    this._versions = versions;
  }

  public get latest(): LauncherMetadataLatest {
    return this._latest;
  }

  public get versions(): LauncherMetadataVersion[] {
    return this._versions;
  }

  public static fromJSON(
    json: Record<string, unknown>
  ): LauncherMetadataResponse {
    return new LauncherMetadataResponse(
      LauncherMetadataLatest.fromJSON(json.latest as Record<string, unknown>),
      (json.versions as Record<string, unknown>[]).map((version) =>
        LauncherMetadataVersion.fromJSON(version)
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

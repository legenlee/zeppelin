import { LauncherMetadataLatest } from './launcherMetadataLatest';
import { LauncherMetadataVersion } from './launcherMetadataVersion';

export type LauncherMetadataResponse = {
  latest: LauncherMetadataLatest;
  versions: LauncherMetadataVersion[];
};

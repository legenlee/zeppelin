import { ipcRenderer } from 'electron';
import { Constants } from '@/common/constants';
import { Metadata, MetadataChannel } from './metadata';

export class Expose {
  public static readonly API_KEY = Constants.APP_ID;
  public static readonly API_METHODS = {
    metadata: {
      getLatestMinecraftVersions: () => {
        return ipcRenderer.invoke(
          MetadataChannel.GET_LATEST_MINECRAFT_VERSIONS
        ) as ReturnType<(typeof Metadata)['getLatestMinecraftVersions']>;
      },
      getMinecraftVersions: () => {
        return ipcRenderer.invoke(
          MetadataChannel.GET_MINECRAFT_VERSIONS
        ) as ReturnType<(typeof Metadata)['getMinecraftVersions']>;
      },
    },
  } as const;
}

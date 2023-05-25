import { ipcRenderer } from 'electron';
import { Constants } from '@/common/constants';
import { Metadata, MetadataChannel } from './metadata';

export class Expose {
  public static readonly API_KEY = Constants.APP_ID;
  public static readonly API_METHODS = {
    metadata: {
      fetchMinecraftVersions: () => {
        return ipcRenderer.invoke(
          MetadataChannel.FETCH_MINECRAFT_VERSIONS
        ) as ReturnType<(typeof Metadata)['fetchMinecraftVersions']>;
      },
    },
  } as const;
}

import { ipcRenderer } from 'electron';
import { Constants } from '@/common/constants';
import { MetadataChannelNames } from './channels/enums/metadataChannelNames';
import { MetadataChannel } from './channels/metadataChannel';

export class Expose {
  public static readonly API_KEY = Constants.APP_ID;
  public static readonly API_METHODS = {
    metadata: {
      fetchMinecraftVersions: () => {
        return ipcRenderer.invoke(
          MetadataChannelNames.FETCH_MINECRAFT_VERSIONS,
        ) as ReturnType<(typeof MetadataChannel)['fetchMinecraftVersions']>;
      },
    },
  } as const;
}

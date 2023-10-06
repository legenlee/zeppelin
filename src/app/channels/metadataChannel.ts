import { ipcMain } from 'electron';
import { MetadataAPI } from '../api/metadataAPI';
import { MetadataChannelNames } from './enums/metadataChannelNames';

export class MetadataChannel {
  private static async fetchMinecraftVersions() {
    const result = await MetadataAPI.getLauncherMetadata();
    return result.toJSON();
  }

  public static listen() {
    ipcMain.handle(
      MetadataChannelNames.FETCH_MINECRAFT_VERSIONS,
      MetadataChannel.fetchMinecraftVersions,
    );
  }
}

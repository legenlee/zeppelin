import { ipcMain } from 'electron';
import { MetadataAPI } from './api/metadataAPI';
import { MetadataChannel } from './channels/metadataChannel';

export class Metadata {
  public static async fetchMinecraftVersions() {
    const result = await MetadataAPI.getLauncherMetadata();
    return result.toJSON();
  }

  public static listen() {
    ipcMain.handle(
      MetadataChannel.FETCH_MINECRAFT_VERSIONS,
      Metadata.fetchMinecraftVersions
    );
  }
}

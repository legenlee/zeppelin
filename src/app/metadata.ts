import { ipcMain } from 'electron';
import { Metadata as MetadataAPI } from './api/metadata';
import { MetadataChannel } from './channels';

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

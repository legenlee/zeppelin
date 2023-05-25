import { ipcMain } from 'electron';
import { Metadata as MetadataAPI } from './api/metadata';

export enum MetadataChannel {
  FETCH_MINECRAFT_VERSIONS = 'Metadata:getMinecraftVersions',
}

export class Metadata {
  public static async fetchMinecraftVersions() {
    const result = await MetadataAPI.getLauncherMetadata();
    return result;
  }

  public static listen() {
    ipcMain.handle(
      MetadataChannel.FETCH_MINECRAFT_VERSIONS,
      Metadata.fetchMinecraftVersions
    );
  }
}

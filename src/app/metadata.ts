import { ipcMain } from 'electron';
import { Metadata as MetadataAPI } from './api/metadata';

export enum MetadataChannel {
  GET_MINECRAFT_VERSIONS = 'Metadata:getMinecraftVersions',
}

export class Metadata {
  private static async _getMinecraftVersions() {
    const result = await MetadataAPI.getLauncherMetadata();

    return result.versions.map((version) => version.toJSON());
  }

  public static bootstrap() {
    ipcMain.handle(
      MetadataChannel.GET_MINECRAFT_VERSIONS,
      Metadata._getMinecraftVersions
    );
  }
}

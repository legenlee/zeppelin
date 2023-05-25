import { ipcMain } from 'electron';
import { Metadata as MetadataAPI } from './api/metadata';

export enum MetadataChannel {
  GET_LATEST_MINECRAFT_VERSIONS = 'Metadata:getLatestMinecraftVersions',
  GET_MINECRAFT_VERSIONS = 'Metadata:getMinecraftVersions',
}

export class Metadata {
  public static async getLatestMinecraftVersions() {
    const result = await MetadataAPI.getLauncherMetadata();

    return result.latest;
  }

  public static async getMinecraftVersions() {
    const result = await MetadataAPI.getLauncherMetadata();

    return result.versions.map((version) => version.toJSON());
  }

  public static listen() {
    ipcMain.handle(
      MetadataChannel.GET_MINECRAFT_VERSIONS,
      Metadata.getMinecraftVersions
    );
  }
}

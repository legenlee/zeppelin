import { ipcMain } from 'electron';
import { Metadata } from './api/metadata';

export enum VersionChannelId {
  GET_MINECRAFT_VERSIONS = 'Version:getMinecraftVersions',
}

export class Version {
  private static async _getMinecraftVersions() {
    const result = await Metadata.getLauncherMetadata();

    return result.versions.map((version) => version.id);
  }

  public static bootstrap() {
    ipcMain.handle(
      VersionChannelId.GET_MINECRAFT_VERSIONS,
      Version._getMinecraftVersions
    );
  }
}

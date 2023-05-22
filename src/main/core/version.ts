import { ipcMain } from 'electron';
import { Metadata } from 'common/api/metadata';

export enum VersionChannelId {
  GET_MINECRAFT_VERSIONS = 'Version:getMinecraftVersions',
}

export class Version {
  private static async _getMinecraftVersions() {
    return await Metadata.getLauncherMetadata();
  }

  public static bootstrap() {
    ipcMain.handle(
      VersionChannelId.GET_MINECRAFT_VERSIONS,
      Version._getMinecraftVersions
    );
  }
}

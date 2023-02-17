import { ipcMain } from 'electron';
import { Games } from 'core/api/games';

export enum VersionChannelName {
  GET_MINECRAFT_VERSIONS = 'version.getMinecraftVersions',
}

export class Version {
  private constructor() {
    //
  }

  public async getMinecraftVersions() {}

  public static bootstrap(): void {
    const instance = new Version();

    ipcMain.on(
      VersionChannelName.GET_MINECRAFT_VERSIONS,
      instance.getMinecraftVersions
    );
  }
}

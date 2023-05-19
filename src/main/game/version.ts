import { ipcMain } from 'electron';

export enum VersionChannelName {
  TEST = 'version.test',
}

export class Version {
  private constructor() {
    //
  }

  public async test() {
  }

  public static bootstrap(): void {
    const instance = new Version();

    ipcMain.handle(VersionChannelName.TEST, instance.test);
  }
}

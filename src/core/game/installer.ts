import { Constants } from 'core/common/constants';
import path from 'path';

// TODO: 런처 클래스로부터 파일 설치 로직 분리

/**
 * Installer class handling Minecraft assets.
 */
export class Installer {
  private _baseDirectory: string;

  public get baseDirectory() {
    return this._baseDirectory;
  }

  public get assetsDirectory() {
    return path.join(this._baseDirectory, Constants.ASSETS_DIRECTORY_NAME);
  }

  public get librariesDirectory() {
    return path.join(this._baseDirectory, Constants.LIBRARIES_DIRECTORY_NAME);
  }

  public get versionsDirectory() {
    return path.join(this._baseDirectory, Constants.VERSIONS_DIRECTORY_NAME);
  }

  public static getAvailableVersions() {}
}

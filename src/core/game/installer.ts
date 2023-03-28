import path from 'path';
import { Manifest } from '../api/dto/manifest';
import { Games } from '../api/games';
import { Constants } from '../common/constants';
import { FileSystem } from '../common/fileSystem';
import { FileValidationException } from '../errors/fileValidationException';
import { UnhandledException } from '../errors/unhandledException';
import { InstallerOptions } from './installerOptions';

// TODO: 런처 클래스로부터 파일 설치 로직 분리

/**
 * Installer class handling Minecraft assets.
 */
export class Installer {
  private _baseDirectory: string;

  private constructor(options: InstallerOptions) {
    this._baseDirectory = options.baseDirectory;
  }

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

  public get versionsFilePath() {
    return path.join(this.versionsDirectory, Constants.VERSIONS_FILE_NAME);
  }

  private async _readManifestFile() {
    let jsonData: Manifest;

    const rawData = await FileSystem.readFile(this.versionsFilePath);

    if (typeof rawData !== 'string' || rawData.length === 0) {
      throw new FileValidationException('Versions file is empty.');
    }

    try {
      jsonData = JSON.parse(rawData);
    } catch (error) {
      if (error instanceof SyntaxError) {
        throw new FileValidationException(
          'Version file is corrupted or unreadable.'
        );
      }

      throw new UnhandledException(
        `Unhandled exception from reading version file. Path: ${this.versionsFilePath}`
      );
    }

    return jsonData;
  }

  // TODO: 파일 저장 구현
  private async _fetchManifestFile() {
    let jsonData: Manifest;

    try {
      jsonData = await Games.getAvailableVersions();
      await FileSystem.writeFile(
        this.versionsFilePath,
        JSON.stringify(jsonData)
      );
    } catch (error) {
      console.error(error);
      throw error;
    }

    return jsonData;
  }

  /**
   * Gets available Minecraft versions.
   * @param offline If sets to true, the method will get versions from cached file. otherwise fetchs from Mojang API. default is ``false``.
   * @returns Available versions json.
   */
  public getAvailableVersions(offline = false) {
    if (offline) {
      return this._readManifestFile();
    }

    return this._fetchManifestFile();
  }

  /**
   * Creates installer instance.
   * @returns Installer instance.
   */
  public static create(options: InstallerOptions) {
    return new Installer(options);
  }
}

import path from 'path';
import { Manifest } from '../api/dto/manifest';
import { Games } from '../api/games';
import { Constants } from '../common/constants';
import { FileSystem } from '../common/fileSystem';
import { FileValidationException } from '../exceptions/fileValidationException';
import { UnhandledException } from '../exceptions/unhandledException';

// TODO: 런처 클래스로부터 파일 설치 로직 분리

/**
 * Installer class handling Minecraft assets.
 */
export class Installer {
  private _baseDirectory: string;
  private static _instance: Installer;

  private constructor(baseDirectory: string) {
    this._baseDirectory = baseDirectory;
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

  private async _readManifestFile() {
    let jsonData: Manifest;
    const versionsFilePath = path.join(
      this.versionsDirectory,
      Constants.VERSIONS_FILE_NAME
    );

    const rawData = await FileSystem.readFile(versionsFilePath);

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
        `Unhandled exception from reading version file. Path: ${versionsFilePath}`
      );
    }

    return jsonData;
  }

  // TODO: 파일 저장 구현
  private async _fetchManifestFile() {
    let jsonData: Manifest;

    try {
      jsonData = await Games.getAvailableVersions();
    } catch (error) {
      // TODO: Handling network exception.
      console.error(error);
      throw error;
    }

    return jsonData;
  }

  public static getAvailableVersions(offline: false) {
    if (offline) {
      return this._instance._readManifestFile();
    }

    return this._instance._fetchManifestFile();
  }
}

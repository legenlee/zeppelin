import { Games } from '../api/games';
import { Manifest } from '../api/dto/manifest';
import { BadRequestException } from '../exceptions/badRequestException';
import { MetaValidationException } from '../exceptions/metaValidationException';
import { NotFoundException } from '../exceptions/notFoundException';
import { UnhandledException } from '../exceptions/unhandledException';
import { VersionValidationException } from '../exceptions/versionValidationException';
import { Constants } from '../common/constants';
import { FileSystem } from '../common/fileSystem';
import { LauncherState } from '../enums/launcherState';
import { LauncherProperties } from './launcherProperties';
import { LaunchOptions } from './launchOptions';
import { LaunchProfile } from './launchProfile';
import { VersionDetail } from 'core/api/dto/versionDetail';

export class Launcher {
  private _launcherProperties: LauncherProperties;
  private _launcherState: LauncherState;

  private get _versionFilePath() {
    return `${this._launcherProperties.metasPath}/${this._launcherProperties.versionId}.json`;
  }

  private get _metaFilePath() {
    return `${this._launcherProperties.metasPath}/${Constants.META_FILE_NAME}`;
  }

  private constructor(launcherProperties: LauncherProperties) {
    this._launcherProperties = launcherProperties;
  }

  private async _validateBeforeLaunch() {
    try {
      // TODO: 실행 혹은 다운로드 전 검증 로직 구현
    } catch {
      // TODO: 검증 로직 중 예외처리 구현
    }
  }

  private async _downloadBeforeLaunch() {
    try {
      // TODO: 실행 전 다운로드 로직 구현
    } catch {
      // TODO: 다운로드 및 부트스트랩 로직 중 예외처리 구현
    }
  }

  private async _validateMeta() {
    let meta: Manifest;

    try {
      const rawMeta = await FileSystem.readFile(this._metaFilePath);
      meta = JSON.parse(rawMeta);
    } catch (error) {
      if (error instanceof SyntaxError) {
        throw new MetaValidationException(
          `Cannot parse the meta file. Seems it has been corrupted. Path: ${this._metaFilePath}`
        );
      } else if (error instanceof NotFoundException) {
        throw new MetaValidationException(
          `Cannot find the meta file. Path: ${this._metaFilePath}`
        );
      } else if (error instanceof BadRequestException) {
        throw new MetaValidationException(
          `Cannot find the meta file but a directory. Path: ${this._metaFilePath}`
        );
      }

      throw new UnhandledException('Unhandled exception from validating meta.');
    }

    return meta;
  }

  private async _validateVersion() {
    let version: VersionDetail;

    try {
      const rawVersionFile = await FileSystem.readFile(this._versionFilePath);
      version = JSON.parse(rawVersionFile);
    } catch (error) {
      if (error instanceof SyntaxError) {
        throw new VersionValidationException(
          `Cannot parse the version file. Seems it has been corrupted. Path: ${this._versionFilePath}`
        );
      } else if (error instanceof NotFoundException) {
        throw new VersionValidationException(
          `Cannot find the version file. Path: ${this._versionFilePath}`
        );
      } else if (error instanceof BadRequestException) {
        throw new VersionValidationException(
          `Cannot find the version file but a directory. Path: ${this._versionFilePath}`
        );
      }

      throw new UnhandledException(
        'Unhandled exception from validating version file.'
      );
    }

    return version;
  }

  private async _validateLibraries() {
    //
  }

  private async _validateAssets() {
    //
  }

  private async _downloadMeta() {
    //
  }

  private async _downloadVersion() {
    //
  }

  private async _downloadLibraries() {
    //
  }

  private async _downloadAssets() {
    //
  }

  private async _saveConfig() {
    //
  }

  private async _loadConfig() {
    //
  }

  public async launch(
    launchOptions: LaunchOptions,
    launchProfile: LaunchProfile
  ) {
    //
  }

  /**
   * Creates launcher instance for launching Minecraft.
   * If instance is exists in specified directory, throws exception. To load existing instances in specified directory, call load instead.
   *
   * @param path
   */
  public static create(launcherProperties: LauncherProperties) {
    // TODO: 부트스트랩 소스 구현
    return new Launcher(launcherProperties);
  }

  /**
   * Loads launcher instance for launching Minecraft which is already exists. To create new instance to empty directory, call create instead.
   * @param path
   */
  public static load() {
    // TODO: 로드 소스 구현
    // return new Launcher();
  }
}

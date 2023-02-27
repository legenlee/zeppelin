import { LauncherProperties } from './launcherProperties';
import { LaunchOptions } from './launchOptions';
import { LaunchProfile } from './launchProfile';

export class Launcher {
  private _launcherProperties: LauncherProperties;

  private constructor(launcherProperties: LauncherProperties) {
    this._launcherProperties = launcherProperties;
  }

  private async _downloadBeforeLaunch() {
    try {
      // TODO: 실행 전 다운로드 로직 구현
    } catch {
      // TODO: 다운로드 및 부트스트랩 로직 중 예외처리 구현
    }
  }

  private async _validateBeforeLaunch() {
    //
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

  private async _downloadLibraries() {
    //
  }

  private async _downloadAssets() {
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
    return new Launcher();
  }

  /**
   * Loads launcher instance for launching Minecraft which is already exists. To create new instance to empty directory, call create instead.
   * @param path
   */
  public static load() {
    // TODO: 로드 소스 구현
    return new Launcher();
  }
}

export class Launcher {
  private constructor() {
    //
  }

  public launch() {
    //
  }

  /**
   * Creates launcher instance for launching Minecraft.
   * If instance is exists in specified directory, throws exception. To load existing instances in specified directory, call load instead.
   *
   * @param path
   */
  public static create() {
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

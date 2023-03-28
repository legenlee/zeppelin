export class Constants {
  public static readonly IDENTIFIER = 'Zeppelin';

  public static readonly ASSETS_DIRECTORY_NAME = 'assets';
  public static readonly LIBRARIES_DIRECTORY_NAME = 'libraries';
  public static readonly VERSIONS_DIRECTORY_NAME = 'versions';

  public static readonly VERSIONS_FILE_NAME = 'versions.json';

  /**
   * @deprecated
   * META_FILE_NAME is deprecated. Use {@link Constants.VERSIONS_FILE_NAME VERSIONS_FILE_NAME} instead.
   */
  public static readonly META_FILE_NAME = Constants.VERSIONS_FILE_NAME;
}

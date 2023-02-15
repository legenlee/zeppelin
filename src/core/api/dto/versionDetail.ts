export class VersionDetail {
  // FIXME: Specify key-value object type
  public readonly arguments?: Record<string, unknown>;
  public readonly assetIndex?: Record<string, unknown>;
  public readonly assets?: string;
  public readonly complianceLevel?: number;
  public readonly downloads?: Record<string, unknown>;
  public readonly id?: string;
  public readonly javaVersion?: Record<string, unknown>;
  public readonly libraries?: Record<string, unknown>[];
  public readonly logging?: Record<string, unknown>;
  public readonly mainClass?: string;
  public readonly minecraftArguments?: string;
  public readonly minimumLauncherVersion?: number;
  public readonly releaseTime?: Date;
  public readonly time?: Date;
  public readonly type?: string;
}

import { Client } from '../common/client';
import { Manifest } from './dto/manifest';

export class Games {
  public static readonly METADATA_URL = new URL(
    'https://piston-meta.mojang.com'
  );

  public static readonly LIBRARIES_URL = new URL(
    'https://libraries.minecraft.net'
  );

  public static readonly ASSETS_URL = new URL(
    'https://resources.download.minecraft.net'
  );

  public static getAvailableVersions() {
    const client = new Client(this.METADATA_URL);

    return client.get<Manifest>('/mc/game/version_manifest_v2.json');
  }

  public static downloadLibraies(name: string) {
    const client = new Client('https://libraries.minecraft.net');
  }

  public static downloadAssets(hash: string) {
    const client = new Client('https://resources.download.minecraft.net');
  }
}

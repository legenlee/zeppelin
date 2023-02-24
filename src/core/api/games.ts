import { Client } from '../common/client';
import { Manifest } from './dto/manifest';

export class Games {
  public static getAvailableVersions() {
    const client = new Client(
      'https://piston-meta.mojang.com/mc/game/version_manifest_v2.json'
    );

    return client.get<Manifest>();
  }

  public static downloadLibraies(name: string) {
    const client = new Client('https://libraries.minecraft.net');
  }

  public static downloadAssets(hash: string) {
    const client = new Client('https://resources.download.minecraft.net');
  }
}

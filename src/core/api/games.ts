import { Client } from 'core/common/client';
import { Manifest } from './dto/manifest';

export class Games {
  public static getAvailableVersions() {
    const client = new Client(
      'https://piston-meta.mojang.com/mc/game/version_manifest_v2.json'
    );

    return client.get<Manifest>();
  }
}

import { Client } from 'common/client';
import { Constants } from 'common/utils/constants';

export class Version {
  private static readonly _client = Client.create(
    Constants.LAUNCHER_METADATA_URL
  );

  public static async getLauncherMetadata(): Promise<Record<string, unknown>> {
    const response = await Version._client.get(
      '/mc/game/version_manifest.json'
    );

    return response.body as Record<string, unknown>;
  }
}

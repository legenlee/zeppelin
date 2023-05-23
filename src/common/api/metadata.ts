import { Client } from 'common/client';
import { Constants } from 'common/utils/constants';

export class Metadata {
  private static _client = Client.create(Constants.METADATA_URL);

  public static async getLauncherMetadata(): Promise<Record<string, unknown>> {
    const response = await Metadata._client.get(
      '/mc/game/version_manifest.json'
    );

    return response.body as Record<string, unknown>;
  }
}

import { Client } from '../../common/client';
import { Constants } from '../../common/constants';
import { LauncherMetadataResponse } from './dto/launcherMetadataResponse';

export class Metadata {
  private static _client = Client.create(Constants.METADATA_URL);

  public static async getLauncherMetadata(): Promise<LauncherMetadataResponse> {
    const response = await Metadata._client.get(
      '/mc/game/version_manifest.json'
    );

    return LauncherMetadataResponse.fromJSON(
      response.body as Record<string, unknown>
    );
  }
}

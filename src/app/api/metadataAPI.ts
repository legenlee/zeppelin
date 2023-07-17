import { Constants } from '@/common/constants';
import { Client } from '../client';
import { LauncherMetadataResponse } from './dto/launcherMetadataResponseDto';

export class MetadataAPI {
  private static _client = Client.create(Constants.METADATA_URL);

  public static async getLauncherMetadata(): Promise<LauncherMetadataResponse> {
    const response = await MetadataAPI._client.get(
      '/mc/game/version_manifest.json'
    );

    return LauncherMetadataResponse.fromJSON(
      response.body as Record<string, unknown>
    );
  }
}
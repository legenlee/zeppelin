import { Constants } from '@/common/constants';
import { Client } from '../libs/client';
import { LauncherMetadataResponse } from './types/launcherMetadataResponse';

export class MetadataAPI {
  private static _client = Client.create(Constants.METADATA_URL);

  public static async getLauncherMetadata(): Promise<LauncherMetadataResponse> {
    const response = await MetadataAPI._client.get(
      '/mc/game/version_manifest.json',
    );

    return response.body as LauncherMetadataResponse;
  }
}

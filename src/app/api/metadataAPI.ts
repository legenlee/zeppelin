import { Constants } from '@/common/constants';
import { Client } from '../libs/client';
import { LauncherMetadataResponseDto } from './dto/launcherMetadataResponseDto';

export class MetadataAPI {
  private static _client = Client.create(Constants.METADATA_URL);

  public static async getLauncherMetadata(): Promise<LauncherMetadataResponseDto> {
    const response = await MetadataAPI._client.get(
      '/mc/game/version_manifest.json',
    );

    return LauncherMetadataResponseDto.fromJSON(
      response.body as Record<string, unknown>,
    );
  }
}

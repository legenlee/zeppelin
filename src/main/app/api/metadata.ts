import { Client } from '../../common/client';
import { Constants } from '../../common/constants';
import { LauncherMetadataResponseDto } from './dto/launcherMetadataResponse.dto';

export class Metadata {
  private static _client = Client.create(Constants.METADATA_URL);

  public static async getLauncherMetadata(): Promise<LauncherMetadataResponseDto> {
    const response = await Metadata._client.get(
      '/mc/game/version_manifest.json'
    );

    return LauncherMetadataResponseDto.fromJSON(
      response.body as Record<string, unknown>
    );
  }
}

import { readonly, ref } from 'vue';
import { defineStore } from 'pinia';
import { LauncherMetadataResponseDto } from 'common/api/dto/launcherMetadataResponse.dto';
import { LauncherMetadataVersionDto } from 'common/api/dto/launcherMetadataVersion.dto';

const store = () => {
  const versions = ref<LauncherMetadataVersionDto[]>([]);
  const setVersions = (newVersions: LauncherMetadataVersionDto[]) => {
    versions.value = newVersions;
  };

  const fetchVersions = async () => {
    const result = (await window.ipc.invoke(
      'Version:getMinecraftVersions'
    )) as LauncherMetadataResponseDto;

    setVersions(result.versions);
  };

  return {
    versions: readonly(versions),
    fetchVersions,
  };
};

export const useVersionStore = defineStore('version', store);

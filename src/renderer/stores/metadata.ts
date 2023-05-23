import { readonly, ref } from 'vue';
import { defineStore } from 'pinia';
// import { MetadataChannel } from '../../main/app/metadata';
// import { LauncherMetadataVersion } from '../../main/app/api/dto/launcherMetadataVersion';

const store = () => {
  const minecraftVersions = ref<Record<string, unknown>[]>([]);
  const setMinecraftVersions = (newVersions: Record<string, unknown>[]) => {
    minecraftVersions.value = newVersions;
  };

  const fetchMinecraftVersions = async () => {
    const result = (await window.ipc.invoke(
      'Metadata:getMinecraftVersions'
    )) as Record<string, unknown>[];

    setMinecraftVersions(result);
  };

  return {
    minecraftVersions: readonly(minecraftVersions),
    fetchMinecraftVersions,
  };
};

export const useMetadataStore = defineStore('metadata', store);

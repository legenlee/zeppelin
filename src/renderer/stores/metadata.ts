import { readonly, ref } from 'vue';
import { defineStore } from 'pinia';
import { MetadataChannel } from '@/app/metadata';
import { LauncherMetadataVersion } from '@/app/api/dto/launcherMetadataVersion';

const store = () => {
  const minecraftVersions = ref<Record<string, unknown>[]>([]);
  const setMinecraftVersions = (newVersions: Record<string, unknown>[]) => {
    minecraftVersions.value = newVersions;
  };

  const fetchMinecraftVersions = async () => {
    setMinecraftVersions(result);
  };

  return {
    minecraftVersions: readonly(minecraftVersions),
    fetchMinecraftVersions,
  };
};

export const useMetadataStore = defineStore('metadata', store);

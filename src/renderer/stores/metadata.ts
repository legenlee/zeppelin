import { readonly, ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { LauncherMetadataLatest } from '@/app/api/dto/launcherMetadataLatest';
import { LauncherMetadataResponse } from '@/app/api/dto/launcherMetadataResponse';
import { Nullable } from '@/common/types/nullable';

const store = () => {
  const minecraftVersions = ref<Nullable<LauncherMetadataResponse>>(null);

  const setMinecraftVersions = (
    newVersions: Nullable<LauncherMetadataResponse>
  ) => {
    minecraftVersions.value = newVersions;
  };

  const fetchMinecraftVersions = async () => {
    try {
      const result = await window.zeppelin.metadata.fetchMinecraftVersions();
      setMinecraftVersions(result);
    } catch (error) {
      //
    }
  };

  const getLatestMinecraftVersions = computed(() => {
    return minecraftVersions.value?.latest as Nullable<LauncherMetadataLatest>;
  });

  const getReleaseMinecraftVersions = computed(() => {
    return (
      minecraftVersions.value?.versions
        .filter((version) => version.type === 'release')
        .map((versions) => versions.id) ?? []
    );
  });

  return {
    minecraftVersions: readonly(minecraftVersions),
    fetchMinecraftVersions,
    getLatestMinecraftVersions,
    getReleaseMinecraftVersions,
  };
};

export const useMetadataStore = defineStore('metadata', store);

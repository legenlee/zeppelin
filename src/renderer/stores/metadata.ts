import { readonly, ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { LauncherMetadataLatestDto } from '@/app/api/dto/launcherMetadataLatestDto';
import { LauncherMetadataResponseDto } from '@/app/api/dto/launcherMetadataResponseDto';
import { Nullable } from '@/common/types/nullable';

const store = () => {
  const minecraftVersions = ref<Nullable<LauncherMetadataResponseDto>>(null);

  const setMinecraftVersions = (
    newVersions: Nullable<LauncherMetadataResponseDto>,
  ) => {
    minecraftVersions.value = newVersions;
  };

  const fetchMinecraftVersions = async () => {
    try {
      const result = await window.zeppelin.metadata.fetchMinecraftVersions();
      setMinecraftVersions(result as unknown as LauncherMetadataResponseDto);
    } catch (error) {
      //
    }
  };

  const latestMinecraftVersions = computed(() => {
    return minecraftVersions.value
      ?.latest as Nullable<LauncherMetadataLatestDto>;
  });

  const releaseMinecraftVersions = computed(() => {
    return (
      minecraftVersions.value?.versions
        .filter((version) => version.type === 'release')
        .map((versions) => versions.id) ?? []
    );
  });

  return {
    minecraftVersions: readonly(minecraftVersions),
    fetchMinecraftVersions,
    latestMinecraftVersions,
    releaseMinecraftVersions,
  };
};

export const useMetadataStore = defineStore('metadata', store);

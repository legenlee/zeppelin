import { readonly, ref } from 'vue';
import { defineStore } from 'pinia';

const store = () => {
  const versions = ref<string[]>([]);
  const setVersions = (newVersions: string[]) => {
    versions.value = newVersions;
  };

  const fetchVersions = async () => {
    const result = (await window.ipc.invoke(
      'Version:getMinecraftVersions'
    )) as string[];

    setVersions(result);
  };

  return {
    versions: readonly(versions),
    fetchVersions,
  };
};

export const useVersionStore = defineStore('version', store);

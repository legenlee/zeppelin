import { app } from 'electron';
import path from 'path';

const appPath = app.getAppPath();
const gamefilesPath = path.join(appPath, 'gamefiles');
const assetsPath = path.join(appPath, 'assets');
const librariesPath = path.join(appPath, 'libraries');

export const constants = {
  common: {
    appId: 'zeppelin',
    appPath,
    gamefilesPath,
    assetsPath,
    librariesPath,
  },
  api: {
    game: 'https://piston-meta.mojang.com/mc/game/version_manifest_v2.json',
    libraries: 'https://libraries.minecraft.net',
    assets: 'https://resources.download.minecraft.net',
  },
} as const;

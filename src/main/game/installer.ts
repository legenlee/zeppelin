// Minecraft Installer on Node.js

import fs from 'fs';
import path from 'path';
import { constants } from '../constants';
import { promisifiedHttps } from '../utils/promisifiedHttps';
import Logger from '../logger';

const versionManifestPath = path.join(
  constants.common.gamefilesPath,
  'version_manifest.json',
);

const installVersionManifest = async () => {
  Logger.log('Installing version manifest...');
  if (!fs.existsSync(constants.common.gamefilesPath)) {
    fs.mkdirSync(constants.common.gamefilesPath);
  }

  await promisifiedHttps.install(constants.api.game, versionManifestPath);
  Logger.log('Version manifest installed.');
};

const installVersionDetail = async (version: string): Promise<string> => {
  const versionPath = path.join(constants.common.gamefilesPath, version);
  const versionDetailPath = path.join(versionPath, 'version.json');

  if (!fs.existsSync(versionPath)) {
    Logger.log(
      `Specified version file not found. Installing version detail for ${version}...`,
    );

    fs.mkdirSync(versionPath);

    const versionManifest = JSON.parse(
      fs.readFileSync(versionManifestPath, 'utf-8'),
    ) as VersionManifest;

    const versionDetail = versionManifest.versions.find(
      (v) => v.id === version,
    );

    if (!versionDetail) {
      throw new Error(`Specified version ${version} does not exist.`);
    }

    await promisifiedHttps.install(versionDetail.url, versionDetailPath);
    Logger.log(`Version detail for ${version} installed.`);
  }

  return versionDetailPath;
};

const installGamefile = async (versionDetailPath: string): Promise<void> => {
  const versionDetail = JSON.parse(
    fs.readFileSync(versionDetailPath, 'utf-8'),
  ) as VersionDetail;

  const gamefilePath = path.join(
    constants.common.gamefilesPath,
    versionDetail.id,
    `${versionDetail.id}.jar`,
  );

  if (!fs.existsSync(gamefilePath)) {
    Logger.log(
      `Specified gamefile not found. Installing gamefile for ${versionDetail.id}...`,
    );

    await promisifiedHttps.install(
      versionDetail.downloads.client.url,
      gamefilePath,
    );

    Logger.log(`Gamefile for ${versionDetail.id} installed.`);
  }
};

const installAssets = async (versionDetailPath: string): Promise<string[]> => {
  return [];
};

const installLibraries = async (
  versionDetailPath: string,
): Promise<string[]> => {
  return [];
};

export const install = async (version: string): Promise<void> => {
  await installVersionManifest();
  const versionDetailPath = await installVersionDetail(version);

  await installGamefile(versionDetailPath);
  await installAssets(versionDetailPath);
  await installLibraries(versionDetailPath);

  Logger.log(`Version ${version} installed.`);
};

// Minecraft Installer on Node.js

import fs from 'fs';
import path from 'path';
import { constants } from '../constants';
import { promisifiedHttps } from '../utils/promisifiedHttps';
import { Logger } from '../logger';

const versionManifestPath = path.join(
  constants.common.gamefilesPath,
  'version_manifest.json',
);
const assetIndexesPath = path.join(constants.common.assetsPath, 'indexes');
const assetObjectsPath = path.join(constants.common.assetsPath, 'objects');

const librariesPath = constants.common.librariesPath;

const installVersionManifest = async (): Promise<void> => {
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

const installAssetIndex = async (
  versionDetailPath: string,
): Promise<string> => {
  const versionDetail = JSON.parse(
    fs.readFileSync(versionDetailPath, 'utf-8'),
  ) as VersionDetail;

  const assetIndexPath = path.join(
    assetIndexesPath,
    `${versionDetail.assetIndex.id}.json`,
  );

  if (!fs.existsSync(assetIndexPath)) {
    Logger.log(
      `Specified asset index not found. Installing asset index for ${versionDetail.id}...`,
    );

    if (!fs.existsSync(assetIndexesPath)) {
      fs.mkdirSync(assetIndexesPath, { recursive: true });
    }

    await promisifiedHttps.install(
      versionDetail.assetIndex.url,
      assetIndexPath,
    );

    Logger.log(`Asset index for ${versionDetail.id} installed.`);
  }

  return assetIndexPath;
};

const installAssets = async (assetIndexPath: string): Promise<void> => {
  const assetIndex = JSON.parse(
    fs.readFileSync(assetIndexPath, 'utf-8'),
  ) as AssetIndex;

  if (!fs.existsSync(assetObjectsPath)) {
    fs.mkdirSync(assetObjectsPath);
  }

  Logger.log('Installing assets...');

  for (const [_key, value] of Object.entries(assetIndex.objects)) {
    const subhash = value.hash.substring(0, 2);
    const assetObjectPath = path.join(assetObjectsPath, subhash, value.hash);
    const assetObjectUrl = path.join(constants.api.assets, subhash, value.hash);

    if (!fs.existsSync(assetObjectPath)) {
      fs.mkdirSync(path.dirname(assetObjectPath), { recursive: true });

      await promisifiedHttps.install(assetObjectUrl, assetObjectPath);
    }
  }

  Logger.log('Assets installed.');
};

const installLibraries = async (
  versionDetailPath: string,
): Promise<string[]> => {
  const versionDetail = JSON.parse(
    fs.readFileSync(versionDetailPath, 'utf-8'),
  ) as VersionDetail;

  if (!fs.existsSync(librariesPath)) {
    fs.mkdirSync(librariesPath);
  }

  Logger.log('Installing libraries...');

  for (const library of versionDetail.libraries) {
    const libraryPath = path.join(
      librariesPath,
      library.downloads.artifact.path,
    );

    if (!fs.existsSync(libraryPath)) {
      fs.mkdirSync(path.dirname(libraryPath), { recursive: true });

      await promisifiedHttps.install(
        `${constants.api.libraries}/${library.downloads.artifact.path}`,
        libraryPath,
      );
    }
  }

  Logger.log('Libraries installed.');

  return versionDetail.libraries.map((library) => {
    return path.join(librariesPath, library.downloads.artifact.path);
  });
};

export const install = async (version: string): Promise<void> => {
  await installVersionManifest();
  const versionDetailPath = await installVersionDetail(version);
  await installGamefile(versionDetailPath);
  const assetIndexPath = await installAssetIndex(versionDetailPath);

  await installAssets(assetIndexPath);
  await installLibraries(versionDetailPath);

  Logger.log(`Version ${version} installed.`);
};

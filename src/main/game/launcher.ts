import path from 'path';
import fs from 'fs';
import { spawn } from 'child_process';

import { constants } from '../constants';
import { Logger } from '../logger';

const getClasspaths = (versionDetail: VersionDetail): string => {
  const classpaths = [
    path.join(
      constants.common.gamefilesPath,
      versionDetail.id,
      `${versionDetail.id}.jar`,
    ),
  ];

  // for (const library of versionDetail.libraries) {
  //   if (library.downloads) {
  //     classpaths.push(
  //       path.join(
  //         constants.common.librariesPath,
  //         library.downloads.artifact.path,
  //       ),
  //     );
  //   }
  // }

  return classpaths.join(process.platform === 'win32' ? ';' : ':');
};

export const launch = async (version: string, javawPath: string) => {
  const versionDetail = JSON.parse(
    fs.readFileSync(
      path.join(constants.common.gamefilesPath, version, `${version}.json`),
      'utf-8',
    ),
  ) as VersionDetail;

  const jvmArgumentValues: Record<string, string | number | boolean> = {
    '${natives_directory}': path.join(
      constants.common.minecraftPath,
      'natives',
    ),
    '${launcher_name}': constants.common.appId,
    '${launcher_version}': '0.1',
    '${classpath}': getClasspaths(versionDetail),
  };

  const gameArgumentValues: Record<string, string | number | boolean> = {
    '${auth_player_name}': 'Player',
    '${version_name}': versionDetail.id,
    '${game_directory}': constants.common.minecraftPath,
    '${assets_root}': constants.common.assetsPath,
    '${assets_index_name}': versionDetail.assetIndex.id,
    '${auth_uuid}': '0',
    '${auth_xuid}': '0',
    '${auth_access_token}': '0',
    '${user_type}': 'mojang',
    '${version_type}': 'custom',
    '${clientid}': '0',
  };

  const launchCommandParams: string[] = [
    javawPath,
    '-XstartOnFirstThread',
    '-Xms1024m',
    '-Xmx2048m',
  ];

  for (let jvmArgument of versionDetail.arguments.jvm) {
    if (typeof jvmArgument === 'string') {
      Object.keys(jvmArgumentValues).forEach((key) => {
        jvmArgument = (jvmArgument as string).replace(
          key,
          jvmArgumentValues[key].toString(),
        );
      });

      launchCommandParams.push(jvmArgument);
    }
  }

  launchCommandParams.push(versionDetail.mainClass);

  for (let gameArgument of versionDetail.arguments.game) {
    if (typeof gameArgument === 'string') {
      Object.keys(gameArgumentValues).forEach((key) => {
        gameArgument = (gameArgument as string).replace(
          key,
          gameArgumentValues[key].toString(),
        );
      });

      launchCommandParams.push(gameArgument);
    }
  }

  const launchCommand = launchCommandParams.join(' ');

  Logger.log(`Launching ${versionDetail.id}...`);
  Logger.log(`Launch command: ${launchCommand}`);

  spawn(launchCommand, {
    cwd: constants.common.minecraftPath,
    stdio: 'ignore',
  });
};

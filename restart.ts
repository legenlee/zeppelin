// This file fixes the issue the electron app spawning before vite build is not completed.
import type { ConfigEnv, Plugin } from 'vite';

export const restart = (): Plugin => {
  let config: ConfigEnv;
  return {
    name: 'electron-restart',
    configResolved(_config) {
      config = _config;
    },
    closeBundle() {
      if (config.mode === 'production') {
        return;
      }
      process.stdin.emit('data', 'rs');
    },
  };
};

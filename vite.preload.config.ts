import { defineConfig } from 'vite';
import path from 'path';
import { restart } from './restart';

export default defineConfig({
  plugins: [restart()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },
});

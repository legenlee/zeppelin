import { defineConfig } from 'vite';
import { restart } from './restart';

export default defineConfig({
  plugins: [restart()],
});

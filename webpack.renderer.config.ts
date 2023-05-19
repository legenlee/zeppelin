import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

import { VueLoaderPlugin } from 'vue-loader';
import path from 'path';

rules.push({
  test: /\.css$/,
  use: [
    { loader: 'style-loader' },
    { loader: 'vue-style-loader' },
    { loader: 'css-loader' },
  ],
});

export const rendererConfig: Configuration = {
  module: {
    rules: [
      ...rules,
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [...plugins, new VueLoaderPlugin()],
  resolve: {
    alias: {
      common: path.resolve(__dirname, './src/common'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};

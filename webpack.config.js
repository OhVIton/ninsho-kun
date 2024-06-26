const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const srcDir = path.join(__dirname, 'src');

module.exports = {
  entry: {
    content_scripts_authCode: path.join(srcDir, 'content_scripts/authCode.ts'),
    backgrounds_background: path.join(srcDir, 'backgrounds/background.ts'),
  },
  output: {
    path: path.join(__dirname, './extensions'),
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks(chunk) {
        return chunk.name !== 'background';
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: '.', to: '.', context: 'public' }],
      options: {},
    }),
  ],
  mode: 'production',
};

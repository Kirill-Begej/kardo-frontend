import { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev, isProd }: BuildOptions): ModuleOptions['rules'] {
  const fileLoader = {
    test: /\.(png|jpe?g|gif|webp|woff2|woff)$/i,
    type: 'asset/resource',
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const postCssLoader = {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          [
            'postcss-preset-env',
            {
              browsers: 'last 4 versions',
            },
          ],
        ],
      },
    },
  };

  const cssLoader = {
    test: /\.css$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
          esModule: false,
        },
      },
      isProd && postCssLoader,
    ],
  };

  const babelLoader = {
    test: /\.(js|ts)x?$/,
    exclude: /node_modules/,
    use: ['babel-loader'],
  };

  return [
    babelLoader,
    fileLoader,
    svgLoader,
    cssLoader,
  ];
}

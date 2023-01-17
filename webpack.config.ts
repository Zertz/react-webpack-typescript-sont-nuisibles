import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { resolve } from "node:path";
import type { Configuration, RuleSetUseItem } from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

const devServer: DevServerConfiguration = {
  historyApiFallback: true,
  hot: true,
  static: "./dist",
};

function getBaseConfiguration(cmtsxLoader: RuleSetUseItem[]): Configuration {
  return {
    // @ts-expect-error 🙈
    name: cmtsxLoader[0].loader.split("-")[0],
    devtool: "eval-source-map",
    devServer,
    entry: "./src/main.tsx",
    experiments: {
      lazyCompilation: true,
    },
    module: {
      rules: [
        {
          test: /.([cm]?ts|tsx)$/,
          use: cmtsxLoader,
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.png$/i,
          type: "asset",
        },
        {
          test: /\.txt$/i,
          type: "asset/source",
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      extensionAlias: {
        ".ts": [".js", ".ts"],
        ".cts": [".cjs", ".cts"],
        ".mts": [".mjs", ".mts"],
      },
    },
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
            chunks: "all",
          },
        },
      },
    },
    output: {
      filename: "[name].bundle.js",
      path: resolve(__dirname, "dist"),
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "index.html",
      }),
      new ReactRefreshWebpackPlugin(),
    ],
  };
}

const configurations = [
  getBaseConfiguration([
    {
      loader: "babel-loader",
    },
  ]),
  getBaseConfiguration([
    {
      loader: "ts-loader",
      options: {
        transpileOnly: true,
      },
    },
  ]),
  getBaseConfiguration([
    {
      loader: "swc-loader",
    },
  ]),
];

export default configurations;

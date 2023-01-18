import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { resolve } from "node:path";
import TerserPlugin from "terser-webpack-plugin";
import type { Configuration, RuleSetUseItem } from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

const devServer: DevServerConfiguration = {
  historyApiFallback: true,
  hot: true,
  static: "./dist",
};

function getBaseConfiguration(
  mode: "development" | "production",
  cmtsxLoader: RuleSetUseItem[]
): Configuration {
  // @ts-expect-error 🙈
  const name = cmtsxLoader[0].loader.split("-")[0];

  return {
    name,
    devtool: "eval-source-map",
    devServer: mode === "development" ? devServer : undefined,
    entry: "./src/main.tsx",
    experiments:
      mode === "development"
        ? {
            lazyCompilation: {
              entries: false,
              imports: true,
            },
          }
        : undefined,
    mode,
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
          // use: "file-loader",
          type: "asset",
        },
        {
          test: /\.txt$/i,
          // use: "raw-loader",
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
      chunkIds: "deterministic",
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
            chunks: "all",
          },
        },
      },
      ...(mode === "production" && {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            minify: name === "swc" ? TerserPlugin.swcMinify : undefined,
          }),
        ],
      }),
    },
    output: {
      filename: "[name].[contenthash].js",
      path: resolve(__dirname, "dist"),
      publicPath: "/",
    },
    // @ts-expect-error Trust me.
    plugins: [
      new HtmlWebpackPlugin({
        template: "index.html",
      }),
      mode === "development" && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
  };
}

const configurations = function (
  _: unknown,
  { mode }: { mode: "development" | "production" }
) {
  return [
    getBaseConfiguration(mode, [
      {
        loader: "babel-loader",
      },
    ]),
    getBaseConfiguration(mode, [
      {
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
    ]),
    getBaseConfiguration(mode, [
      {
        loader: "swc-loader",
      },
    ]),
  ];
};

export default configurations;

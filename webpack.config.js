const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/root-config.ts"),
  output: {
    filename: "root-config.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "system"
  },
  devtool: "sourcemap",
  mode: "development",
  module: {
    rules: [
      {
        // https://github.com/systemjs/systemjs#compatibility-with-webpack
        parser: {
          system: false
        }
      },
      {
        test: /\.(m?js|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"]
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    disableHostCheck: true
  },
  plugins: [new CleanWebpackPlugin()],
  externals: [
    "single-spa",
    "i18next",
    "react-i18next",
    "@openmrs/esm-module-config"
  ]
};

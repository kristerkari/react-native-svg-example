const webpack = require("webpack");

module.exports = {
  entry: ["react-hot-loader/patch", "./index.web.js"],
  devServer: {
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          babelrc: false,
          presets: ["@babel/preset-env", "react", "react-native"],
          plugins: ["react-hot-loader/babel"]
        }
      },
      {
        test: /\.svgx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "@svgr/webpack"
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      "react-native": "react-native-web"
    },
    extensions: [".web.js", ".js", ".web.jsx", ".jsx"],
    mainFields: ["browser", "main"]
  }
};

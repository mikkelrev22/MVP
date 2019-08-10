module.exports = {
  entry: `./client/src/index.js`,
  output: {
    filename: "bundle.js",
    path: __dirname + './client/dist',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      }
    ]
  }
};
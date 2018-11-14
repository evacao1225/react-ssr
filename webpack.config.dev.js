const path = require('path');
const webpack = require('webpack');
//const autoprefixer = require('autoprefixer');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: __dirname + '/src/index.js',
  /*entry: [
		'webpack-hot-middleware/client',
    './src/client.js'
    //bundle: './src/bundle.js'
  ],*/
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: "bundle.js"
		//publicPath: '/',
		//devtoolModuleFilenameTemplate: info =>
    //  path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
  },
	devServer: {
		contentBase: path.join(__dirname, 'assets'),
		hot: true,
		inline: true,
		historyApiFallback: true,
		port: 3000
	},
  module: {
    rules: [
      {
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
    ]
  },
  plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}

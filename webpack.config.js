var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
	],
	module: {
		loaders: [{
			test: /\.js?x$/,
			exclude: /node_modules/,
			loader: 'react-hot-loader!babel-loader'
		}]
	},
	output: {
		path: __dirname + "/dist/js",
		publicPath: "/js/",
		filename: "bundle.js"
	},
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}

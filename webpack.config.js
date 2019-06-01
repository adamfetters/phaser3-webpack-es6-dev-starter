const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: {
		app: './src/index.js',
	},

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'build'),
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src/'),
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},

	devServer: {
		contentBase: path.resolve(__dirname, 'build'),
	},

	plugins: [
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, 'index.html'),
				to: path.resolve(__dirname, 'build'),
			},
			{
				from: path.resolve(__dirname, 'assets', '**', '*'),
				to: path.resolve(__dirname, 'build'),
			},
		]),
		new webpack.DefinePlugin({
			'typeof CANVAS_RENDERER': JSON.stringify(true),
			'typeof WEBGL_RENDERER': JSON.stringify(true),
		}),
	],
};

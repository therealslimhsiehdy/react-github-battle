var HtmlWebpackPlugin = require('html-webpack-plugin'); // Get this plugin
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
})

module.exports={
	entry: [
		'./app/index.js'
	],
	output: {
		path: __dirname + '/dist', //2  Go into this path
		filename: "index_bundle.js" //3 Goes to this filename
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"} //1 JSX to JS
		]
	},
	plugins: [HtmlWebpackPluginConfig]
}
// config

var webpack = require('webpack');

var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var config = {

	entry: './index.js',

	output: {

	    filename: 'bundle.js'
	},

	plugins: [
	    new uglifyJsPlugin({
	      compress: {
	        warnings: false
	      }
	    })
	]

}

module.exports = config;


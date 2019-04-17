'use strict';

var path = require('path');
var webpack = require('webpack');

require('es6-promise').polyfill();

// How can we add live reloading on frontend changes?
// How can we add live reloading to nodemon?

module.exports = {
	entry: './public/javascripts/main.js',

	output: {
		path: __dirname,
		filename: './public/javascripts/app.bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},

	stats: {
		// Colored output
		colors: true
	},

	// Create Sourcemaps for the bundle
	devtool: 'source-map'
};
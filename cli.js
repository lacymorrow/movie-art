#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var movieArt = require('./index');
var movie = process.argv[2];

function help() {
	console.log(pkg.description);
	console.log('');
	console.log('Usage');
	console.log('  $ movie-art movie [year]');
	console.log('');
	console.log('Example');
	console.log('  $ movie-art \'Oceans Eleven\' 1960');
	console.log('  http://path/to/oceans_eleven_poster.jpg');
}

if (process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

var cb = function (err, url) {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(url);
}

var argc = process.argv.length;
if (argc < 3){
	help();
} else if (argc === 3){
	movieArt(movie, null, cb);
} else {
	movieArt(movie, process.argv[3], cb);
}
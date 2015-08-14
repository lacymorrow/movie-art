#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var movieArt = require('./index');
var movie = process.argv[2];

var cb = function (err, url) {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(url);
}

function help() {
	console.log(pkg.description);
	console.log('');
	console.log('Usage');
	console.log('  $ movie-art movie [year] [size] [type]');
	console.log('');
	console.log('Example');
	console.log('  $ movie-art \'Oceans Eleven\' 1960');
	console.log('  http://path/to/oceans_eleven_poster_1960.jpg');
	movieArt(null, null, null, cb);
}

if (process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

// Oh valiant if chain, I wish you weren't so useful
var argc = process.argv.length;
if (argc < 3){
	help();
} else if (argc === 3){
	movieArt(movie, null, null, 'movie', cb);
} else if (argc === 4 && (!isNaN(parseFloat(process.argv[3])) && isFinite(process.argv[3])){
	movieArt(movie, process.argv[3], null, 'movie', cb);
} else if (argc === 4 && ['movie', 'tv'].indexOf(process.argv[3])){
	movieArt(movie, null, null, process.argv[3], cb);
} else if (argc === 4){
	movieArt(movie, null, process.argv[3], 'movie', cb);
} else if (argc === 5 && !isNaN(parseFloat(process.argv[3])) && isFinite(process.argv[3]) && ['movie', 'tv'].indexOf(process.argv[4])){
	movieArt(movie, process.argv[3], null, process.argv[4], cb);
} else if (argc === 5 && !isNaN(parseFloat(process.argv[3])) && isFinite(process.argv[3])){
	movieArt(movie, process.argv[3], process.argv[4], 'movie', cb);
} else if (argc === 5){
	movieArt(movie, null, process.argv[3], process.argv[4], cb);
} else {
	movieArt(movie, process.argv[3], process.argv[4], process.argv[5], cb);
}

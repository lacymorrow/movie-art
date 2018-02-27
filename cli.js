#!/usr/bin/env node
'use strict'
const meow = require( 'meow' )
const movieArt = require( './index' )

const cli = meow( `
	Usage
	  $ movie-art search [year] [size] [type] [output]

	Options
		--year,   -y  Release date year
		--size,   -s  Possible values: [w92, w154, w185, w342, w500, w780, original]
		--type,   -t  Possible values: [tv, movie] 
		--output, -o  Possible values: [poster, backdrop, all]

	Example
	  $ movie-art 'Oceans Eleven' --year 1960
	  // => ...
`, {
	flags: {
		output: {
			type: 'string',
			alias: 'o'
		},
		size: {
			type: 'string',
			alias: 's'
		},
		type: {
			type: 'string',
			alias: 't'
		},
		year: {
			type: 'string',
			alias: 'y'
		}
	}
} )

let opts = {
	size: null,
	type: null,
	year: null,
	output: 'poster'
}

if ( cli.flags.s ) opts.size = cli.flags.s
if ( cli.flags.t ) opts.type = cli.flags.t
if ( cli.flags.y ) opts.year = cli.flags.y
if ( cli.flags.o ) opts.output = cli.flags.o
if ( cli.input[1] ) opts.year = cli.flags.y
if ( !cli.input[0] ) cli.showHelp()

movieArt( cli.input[0], opts )
	.then( console.log )

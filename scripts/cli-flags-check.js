'use strict'
// Network-free check that cli.js parses its flags. Stubs ./index so no TMDB call is made.
const assert = require( 'assert' )
const path = require( 'path' )

const indexPath = require.resolve( path.join( __dirname, '..', 'index.js' ) )
let captured
require.cache[indexPath] = {
	id: indexPath,
	filename: indexPath,
	loaded: true,
	exports: ( ...args ) => {

		captured = args
		return Promise.resolve( null )

	}
}

const run = argv => {

	delete require.cache[require.resolve( '../cli.js' )]
	process.argv = [process.argv[0], 'cli.js', ...argv]
	captured = undefined
	require( '../cli.js' )
	return captured

}

const longForm = run( ['Heat', '--year', '1995', '--size', 'w500', '--type', 'movie', '--output', 'backdrop'] )
const shortForm = run( ['Heat', '-y', '1995', '-s', 'w500', '-t', 'movie', '-o', 'backdrop'] )
const expected = { size: 'w500', type: 'movie', year: '1995', output: 'backdrop' }
assert.strictEqual( longForm[0], 'Heat' )
assert.deepStrictEqual( longForm[1], expected )
assert.deepStrictEqual( shortForm[1], expected )

const positional = run( ['Heat', '1995'] )
assert.strictEqual( positional[1].year, '1995' )
console.log( 'cli flags ok' )

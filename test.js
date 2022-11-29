'use strict'
const test = require( 'ava' )
const movieArt = require( './index' )

test( 'returns a url', async t => {

	t.plan( 1 )

	const response = await movieArt( 'crash' )
	t.is( response.indexOf( 'http' ), 0, 'response is a URL' )

} )

test( 'returns a url with year', async t => {

	t.plan( 1 )

	const response = await movieArt( 'crash', {year: 2005} )
	t.is( response.indexOf( 'http' ), 0, 'response is a URL' )

} )

test( 'backdrop returns a different url', async t => {

	t.plan( 1 )

	const response1 = await movieArt( 'crash' )
	const response2 = await movieArt( 'crash', { output: 'backdrop' } )
	t.not( response1, response2, 'poster and backdrop are different URLs' )

} )

test( 'returns a specific size', async t => {

	t.plan( 1 )

	const response = await movieArt( 'crash', { size: 'w92' } )
	t.not( response.indexOf( 'w92' ), -1, 'response is of requested size' )

} )

test( 'returns tv results', async t => {

	t.plan( 1 )

	const response = await movieArt( 'seinfeld', { type: 'tv' } )
	t.is( response.indexOf( 'http' ), 0, 'response is a URL' )

} )

test( 'fetch backdrop and poster', async t => {

	t.plan( 1 )

	const response = await movieArt( 'crash', { output: 'all' } )
	t.is( typeof response, 'object', 'response is an object' )

} )

test( 'callback returns a url', async t => {

	t.plan( 1 )

	await movieArt( 'crash', ( _err, res ) => {

		t.is( res.indexOf( 'http' ), 0, 'response is a URL' )

	} )

} )

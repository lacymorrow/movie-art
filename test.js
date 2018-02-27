'use strict'
import test from 'ava'
import movieArt from './index'

test( 'returns a url ', async t => {

	t.plan( 1 )

	const response = await movieArt( 'crash' )
	t.is( response.indexOf( 'http' ), 0, 'response is a URL' )

} )

test( 'returns a url with year ', async t => {

	t.plan( 1 )

	const response = await movieArt( 'crash', {year: 2005} )
	t.is( response.indexOf( 'http' ), 0, 'response is a URL' )

} )

test( 'landscape returns a different url ', async t => {

	t.plan( 1 )

	const response1 = await movieArt( 'crash' )
	const response2 = await movieArt( 'crash', { landscape: true } )
	t.not( response1, response2, 'portrait and landscape are different URLs' )

} )

test( 'returns a specific size ', async t => {

	t.plan( 1 )

	const response = await movieArt( 'crash', { size: 'w92' } )
	t.not( response.indexOf( 'w92' ), -1, 'response is of requested size' )

} )

test( 'returns tv results ', async t => {

	t.plan( 1 )

	const response = await movieArt( 'seinfeld', { type: 'tv' } )
	t.is( response.indexOf( 'http' ), 0, 'response is a URL' )

} )

test.cb( 'callback returns a url ', t => {

	t.plan( 1 )

	movieArt( 'crash', ( err, res ) => {

		err && t.end( err )
		t.is( res.indexOf( 'http' ), 0, 'response is a URL' )
		t.end()

	} )

} )

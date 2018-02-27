'use strict';
( function ( root, cx ) {

	if ( typeof define === 'function' && define.amd ) {

		// AMD
		define( ['fetch'], cx )

	} else if ( typeof exports === 'object' ) {

		// Node, CommonJS-like
		module.exports = cx( require( 'node-fetch' ) )

	} else {

		// Browser globals (root is window)
		root.movieInfo = cx( root.fetch )

	}

} )( this, function ( fetch ) {

	// TMDB key (public on purpose)
	const key = '9d2bff12ed955c7f1f74b83187f188ae'
	const base = 'https://api.themoviedb.org'

	function getConfiguration () {

		const url =
			base +
			encodeURI( '/3/configuration?api_key=' + key )

		// Request
		return fetch( url, {
			method: 'GET'
		} )
			.then(
				function ( response ) {

					return response.json()

				},
				function ( error ) {

					return Promise.reject( error.message ) //= > String

				}
			)
			.then( function ( json ) {

				if ( json && typeof json.status_message !== 'undefined' ) {

					return Promise.reject( new Error( 'JSON Error: ' + json.status_message ) )

				}

				const baseURL = json.images.base_url
				const sizes = json.images.poster_sizes
				return { baseURL, sizes }

			} )

	}

	async function movieArt ( query, options, cb ) {

		// Massage inputs
		if ( typeof query !== 'string' ) {

			throw new Error( 'Expected search to be a string' )

		} else if ( typeof options === 'function' ) {

			cb = options
			options = null

		}

		if ( typeof cb !== 'function' ) cb = null

		// Default options
		const opts = Object.assign( {
			year: null,
			size: null,
			type: 'movie',
			output: 'poster'
		}, options )

		if ( opts.type === null || ( opts.type !== 'tv' && opts.type !== 'movie' ) ) {

			opts.type = 'movie'

		}

		if ( opts.output !== 'all' && opts.output !== 'backdrop' ) {

			opts.output = 'poster'

		}

		// Get configuration vars
		const { baseURL, sizes } = await getConfiguration()

		// Assemble URL
		const url =
			base +
			encodeURI(
				'/3/search/' +
					opts.type +
					'?api_key=' +
					key +
					'&query=' +
					query +
					( opts.year !== null ? '&year=' + opts.year : '' )
			)

		// Request
		const response = fetch( url, {
			method: 'GET'
		} )
			.then(
				function ( response ) {

					return response.json()

				},
				function ( error ) {

					return Promise.reject( error.message ) //= > String

				}
			)
			.then( function ( json ) {

				if ( json && typeof json.status_message !== 'undefined' ) {

					return Promise.reject( new Error( 'JSON Error: ' + json.status_message ) )

				}
				if ( json && json.results && json.results.length === 0 ) {

					// Retry failed search without year
					if ( opts.year !== null ) {

						opts.year = null
						return movieArt( query, opts, cb )

					} else {

						return Promise.reject( new Error( 'Search Error: No results found' ) )

					}

				} else {

					// Success
					const size = sizes.indexOf( opts.size ) !== -1 ? opts.size : sizes[sizes.length - 1]
					if ( opts.output === 'all' ) {

						return {
							backdrop: encodeURI( baseURL + size + json.results[0].backdrop_path ),
							poster: encodeURI( baseURL + size + json.results[0].poster_path )
						}

					} else {

						const image = opts.output === 'backdrop' ? json.results[0].backdrop_path : json.results[0].poster_path
						return encodeURI( baseURL + size + image )

					}

				}

			} )
			.catch( error => error )

		// Callback
		if ( cb ) {

			return response.then( res => cb( null, res ), err => cb( err, null ) )

		}

		// Promise
		return response

	}

	// exposed public method
	return movieArt

} )


'use strict';
var path = require('path');

module.exports = function (movie, year, size, cb) {
	var search = {
		key: '9d2bff12ed955c7f1f74b83187f188ae',
		protocol: require('https'),
		cb: cb,
		id: null,
		year: null,
		size: null,
		sizes: null,
		movie: movie,
		options: {
			host: 'api.themoviedb.org',
			port: 443,
			path: null
		}
	}
	
	if (typeof year === 'function') {
		cb = year;
		year = size = null;
	} else if (typeof size === 'function') {
		cb = size;
		size = null;
	}

	if (movie === null){
		getConfig(search);
	} else if (typeof movie === 'function') {
		search.cb = movie;
		search.movie = null;
		getConfig(search);
	} else if (typeof movie !== 'string') {
		throw new Error('Expected a string');
	} else {
		search.size = size;
		search.year = year;
		getConfig(search);
	}
};

function getConfig (search) {
	var data = '';
	search.options.path = encodeURI('/3/configuration?api_key=' + search.key);
	search.protocol.get(search.options, function(resp){
	  resp.on('data', function(chunk){
		data += chunk;
	  });
	  resp.on('end', function(){
		var json = JSON.parse(data);
		if (typeof(json.status_message) !== 'undefined'){
			return search.cb('Got error: ' + json.status_message);
		} else {
			search.baseURL = json.images.base_url;
			search.sizes = json.images.poster_sizes;
			if(search.movie === null){
				return search.cb('Available sizes: ' + search.sizes);
			}
			getMovie(search);
		}
	  });
	}).on("error", function(e){
		return search.cb('Got error: ' + e.message);
	});
}

function getMovie(search) {
	var data = '';
	search.options.path = encodeURI('/3/search/movie?api_key=' + search.key + '&query=' + search.movie + ((search.year !== null) ? '&year='+search.year : ''));
	search.protocol.get(search.options, function(resp){
	  resp.on('data', function(chunk){
		data += chunk;
	  });
	  resp.on('end', function(){
		var json = JSON.parse(data);
		if (typeof(json.status_message) !== 'undefined'){
			return search.cb('Got error: ' + json.status_message);
		} else if (json.results.length === 0){
			return search.cb('Got error: ' + 'No results found')
		} else if (search.sizes.indexOf(search.size) !== -1) {
			return search.cb(null, encodeURI(search.baseURL + search.size + json.results[0].poster_path));
		}
		return search.cb(null, encodeURI(search.baseURL + search.sizes[search.sizes.length-1] + json.results[0].poster_path));
	  });
	}).on("error", function(e){
		return search.cb('Got error: ' + e.message);
	});
}
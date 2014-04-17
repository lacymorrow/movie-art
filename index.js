'use strict';
var path = require('path');

module.exports = function (movie, year, cb) {
	// Query '/3/configuration?api_key=' + apiKey
	// Retrieve images.base_url
	// Retrieve images.poster_sizes

	if (movie === null){
		// return poster sizes
		return cb('Available sizes: ' + e.message);
	} else if (typeof movie !== 'string') {
		throw new Error('Expected a string');
	}
	// Query '/3/search/movie?api_key=' + apiKey + '&query=' + movie + ((year !== null) ? '&year='+year : '')
	// Retrieve movie ID
	if (typeof size === 'function') {
		cb = size;
		size = null;
	}

	var apiKey = '9d2bff12ed955c7f1f74b83187f188ae';
	var http = require('https');
	var options = {
	  host: 'api.themoviedb.org',
	  port: 443,
	  path: encodeURI('/3/movie/'+ movieID + '/images?api_key=' + apiKey)
	};

	var data = '';
	http.get(options, function(resp){
	  resp.on('data', function(chunk){
		data += chunk;
	  });
	  resp.on('end', function(){
		var json = JSON.parse(data);
		console.log(data);
		if (typeof(json.error) !== 'undefined'){
			return cb('Got error: ' + json.message);
		} else {
			
		}
	  });
	}).on("error", function(e){
		return cb('Got error: ' + e.message);
	});
};

'use strict';
var assert = require('assert');
var movieArt = require('./index');

it('should return an image url', function () {
	movieArt('crash', function (err, url) {
	    assert.strictEqual(url.indexOf('http'), 0);
	});
});

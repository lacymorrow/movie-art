# movie-art [![npm version](https://badge.fury.io/js/movie-art.svg)](https://badge.fury.io/js/movie-art) [![Build Status](https://travis-ci.org/lacymorrow/movie-art.svg?branch=master)](https://travis-ci.org/lacymorrow/movie-art)

> Get a movie (or TV-series) poster and backdrop image url: "Oceans Eleven" ➔ http://path/to/oceans_eleven_poster.jpg

[![movie-art](demo.svg)]()


## Install

```bash
$ npm install --save movie-art
```


## Usage

```js
var movieArt = require('movie-art')
```

##### Basic usage
```js
movieArt('Oceans Eleven', function (err, url) {
    console.log(url)
    //=> http://path/to/oceans_eleven_poster.jpg
})
```

##### Usage with landscape orientation backdrop
```js
movieArt('Oceans Eleven', {landscape: true}, function (err, url) {
    console.log(url)
    //=> http://path/to/oceans_eleven_backdrop.jpg
})
```

##### Usage with size and year options
```js
movieArt('Oceans Eleven', {year: '1960', size: 'w92'}, function (err, url) {
    console.log(url)
    //=> http://path/to/oceans_eleven_poster_1960_small.jpg
})
```

##### Query television art
```js
movieArt('Star Trek: The Original Series', {type: 'tv'}, function (err, url) {
    console.log(url)
    //=> http://path/to/star_trek_the_original_series_poster.jpg
})

```

## API

### movieArt(movie [, options] [, callback])

Returns a Promise which resolves to a string URL

#### movie

*Required*  
Type: `string`

Movie to search for.

#### callback(error, response)

Function to be called when complete or on error


### Options

A JavaScript object with the following properties:

#### year

Type: `string` 

Optional movie year.


#### size

Type: `string` 

Requested poster size. 
Call `movieArt(function(e){console.log(e);});` or run the CLI command with no arguments to retrieve the list of available sizes.

*possible values at time of writing:* `w92`, `w154`, `w185`, `w342`, `w500`, `w780`, `original`


#### type

Type: `string`

The type of request: either `tv` or `movie`. Defaults to `movie`.


#### landscape

Type: `boolean`

Returns a wider, landscape orientation backdrop if true


## CLI

You can also use it as a CLI app by installing it globally:

```bash
$ npm install --global movie-art
```

#### Usage

```
$ movie-art --help

Usage
  $ movie-art movie [year] [size] [type] [landscape]

Options
  --year,      -y  Release date year
  --size,      -s  Possible values: [w92, w154, w185, w342, w500, w780, original]
  --type,      -t  Possible values: [tv, movie] 
  --landscape, -l  Return wider backdrop image if true

Example
  $ movie-art 'Oceans Eleven' --year 1960  --size w92
  //=> http://path/to/oceans_eleven_poster_1960_small.jpg
```


## Related

* [album-art](https://github.com/lacymorrow/album-art)
* [movie-info](https://github.com/lacymorrow/movie-info)
* [movie-trailer](https://github.com/lacymorrow/movie-trailer)


## License

This package uses data from TMDB. You may consult [TMDB terms of service](https://www.themoviedb.org/documentation/api/terms-of-use) for usage rights.

[MIT](http://opensource.org/licenses/MIT) © [Lacy Morrow](http://lacymorrow.com)

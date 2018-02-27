# movie-art [![npm version](https://badge.fury.io/js/movie-art.svg)](https://badge.fury.io/js/movie-art) [![Build Status](https://travis-ci.org/lacymorrow/movie-art.svg?branch=master)](https://travis-ci.org/lacymorrow/movie-art) [![Try movie-art on RunKit](https://badge.runkitcdn.com/movie-art.svg)](https://npm.runkit.com/movie-art)

> Get a movie (or TV-series) poster and backdrop image url: "Crash" ➔ [http://path/to/crash.jpg](http://image.tmdb.org/t/p/original/pG8LL4LYMCr5uikhx9rewrW8352.jpg)

[![movie-art](demo.svg)]()

#### [Try it on RunKit](https://runkit.com/lacymorrow/movie-art) _([Output](https://runkit.io/lacymorrow/movie-art/branches/master?search=Avatar))_


## Install

Use with your favorite module loader or package manager. In the browser:

```html
<!-- movieInfo window global -->
<script type="text/javascript" src="https://unpkg.com/movie-art" />
```

Using [NPM](https://npmjs.com):

```bash
$ npm install -g movie-art
```


## Features
 * Use anywhere, browser or Node - UMD _([Browser Support](https://caniuse.com/#feat=fetch))_
 * Promise and Callback API
 * Fetch images for movies or television
 * Poster or backdrop photos


## Usage

```js
var movieArt = require('movie-art')

movieArt('Oceans Eleven').then(console.log)
```

##### Callback
```js
movieArt('Oceans Eleven', (err, res) => {
    console.log(res)
    //=> http://path/to/oceans_eleven.jpg
})
```

##### Usage with backdrop and poster
```js
movieArt('Oceans Eleven', {output: 'all'})
  .then( res => console.log(res.backdrop) )

//=> http://path/to/oceans_eleven_backdrop.jpg
```

##### Usage with size and year options
```js
movieArt('Oceans Eleven', {year: '1960', size: 'w92'})
  .then( res => console.log(res.backdrop) )

//=> http://path/to/oceans_eleven_poster_1960_small.jpg
```

##### Query television art
```js
movieArt('Star Trek: The Original Series', {type: 'tv'})
  .then( res => console.log(res.backdrop) )

//=> http://path/to/star_trek_the_original_series_poster.jpg
```


## API

### movieArt(search [, options] [, callback])

Accepts a movie or television show title (string) as input.
Returns a Promise which resolves to a string URL.

#### search

*Required*  
Type: `string`

Movie to search for.

#### callback(error, response)

Function to be called when complete or on error.


### Options

A JavaScript object with the following properties:

#### year

Type: `string` 

Optional movie year.


#### size

Type: `string` 

Requested poster size. 
*possible values:* `w92`, `w154`, `w185`, `w342`, `w500`, `w780`, `original`


#### type

Type: `string`

The type of request: either `tv` or `movie`. Defaults to `movie`.
*possible values:* `tv`, `movie`


#### output

Type: `boolean`

`backdrop` returns a wider, backdrop output backdrop.
`all` returns an object like `{poster:..., backdrop: ...}`
Default: `poster` 
*possible values:* `poster`, `backdrop`, `all`


#### CLI Usage

```
$ movie-art --help

Usage
  $ movie-art movie [year] [size] [type] [output]

Options
  --year,        -y  Release date year
  --size,        -s  Possible values: [w92, w154, w185, w342, w500, w780, original]
  --type,        -t  Possible values: [tv, movie] 
  --output, -o  Possible values: [poster, backdrop, all]

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

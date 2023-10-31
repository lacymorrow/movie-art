> [!IMPORTANT]  
> This library is considered **feature-complete** and will only receive updates for bug fixes. You may still create an issue if you have a feature request.

# movie-art [<img src="https://github.com/lacymorrow/crossover/raw/master/src/static/meta/patreon-button.webp" style="height:40px;" height="40" align="right" />](https://www.patreon.com/bePatron?u=55065733)
[![npm version](https://badge.fury.io/js/movie-art.svg)](https://badge.fury.io/js/movie-art) [![Maintainability](https://api.codeclimate.com/v1/badges/30557712b95ec126712a/maintainability)](https://codeclimate.com/github/lacymorrow/movie-art/maintainability) [![Try movie-art on RunKit](https://badge.runkitcdn.com/movie-art.svg)](https://npm.runkit.com/movie-art)

> Get a movie (or TV-series) poster and backdrop image url: "Crash" ➔ [http://path/to/crash.jpg](http://image.tmdb.org/t/p/original/pG8LL4LYMCr5uikhx9rewrW8352.jpg)

[![movie-art](https://github.com/lacymorrow/movie-art/raw/master/demo.svg?sanitize=true)]()

#### [Try it on RunKit](https://runkit.com/lacymorrow/movie-art) _([Output](https://runkit.io/lacymorrow/movie-art/branches/master?search=Avatar))_


## Features
 * Use anywhere, browser or Node - UMD _([Browser Support](https://caniuse.com/#feat=fetch))_
 * Works in React + NextJS client/server (uses [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch))
 * Promise and Callback API
 * Fetch images for movies or television
 * Poster or backdrop photos


## Install

Using [NPM](https://npmjs.com):

```bash
$ npm install movie-art
```

In the browser:

```html
<!-- movieArt window global -->
<script type="text/javascript" src="https://unpkg.com/movie-art"></script>
```
(via Unpkg, or via [JSDelivr](https://cdn.jsdelivr.net/npm/movie-art/index.min.js))


## Usage

```js
const movieArt = require('movie-art')

movieArt('Oceans Eleven').then(console.log)
```

##### Callback
```js
movieArt('Oceans Eleven', (error, response) => {
    console.log(response)
    //=> http://path/to/oceans_eleven.jpg
})
```

##### Usage with size and year options
```js
movieArt('Oceans Eleven', {year: '1960', size: 'w92'})
  .then( response => console.log(response) )

//=> http://path/to/oceans_eleven_poster_1960_small.jpg
```

##### Usage with backdrop and poster (landscape and portrait)
```js
movieArt('Oceans Eleven', {output: 'all'})
  .then( console.log )

//=> {
  poster: http://path/to/oceans_eleven_poster.jpg,
  backdrop: http://path/to/oceans_eleven_backdrop.jpg,
}
```

##### Query television art
```js
movieArt('Star Trek: The Original Series', {type: 'tv', output: 'all'})
  .then( response => console.log(response.poster) )

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
$ npm install -g movie-art

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

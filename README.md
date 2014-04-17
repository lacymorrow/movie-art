# movie-art [![Build Status](https://travis-ci.org/lacymorrow/movie-art.svg?branch=master)](https://travis-ci.org/lacymorrow/movie-art)

> Get a movie poster image url in node: "Oceans Eleven" ➔ http://path/to/oceans_eleven_poster.jpg


## Install

```bash
$ npm install --save movie-art
```


## Usage

```js

var movieArt = require('movie-art');

movieArt('Oceans Eleven', function (err, url) {
    console.log(url);
    //=> http://path/to/oceans_eleven_poster.jpg
});

movieArt('Oceans Eleven', '1960', function (err, url) {
    console.log(url);
    //=> http://path/to/oceans_eleven_poster_1960.jpg
});

```

## API

### movieArt(movie [, year ] , callback)

#### movie

*Required*  
Type: `string`

Movie to search for.


#### year

Type: `string` 

Optional movie year.

#### callback(err, url)


## CLI

You can also use it as a CLI app by installing it globally:

```bash
$ npm install --global movie-art
```

#### Usage

```bash
$ movie-art --help

Usage
  $ movie-art movie [year]

Example
  $ movie-art 'Oceans Eleven' 1960
  http://path/to/oceans_eleven_poster_1960.jpg
```


## License

[MIT](http://opensource.org/licenses/MIT) © [Lacy Morrow](http://lacymorrow.com)

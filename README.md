# album-art [![Build Status](https://travis-ci.org/lacymorrow/album-art.svg?branch=master)](https://travis-ci.org/lacymorrow/album-art)

> Get an album or artist image url in node: "The Beatles" ➔ http://path/to/beatles.jpg


## Install

```bash
$ npm install --save album-art
```


## Usage

```js

var albumArt = require('album-art');

albumArt('The Beatles', function (err, url) {
    console.log(url);
    //=> 'http://path/to/beatles.jpg'
});

albumArt('The Beatles', 'Abbey Road', 'large', function (err, url) {
    console.log(url);
    //=> http://path/to/beatles/abbey_road_large.jpg
});

```

## API

### albumArt(artist [, album] [, size ] , callback)

#### artist

*Required*  
Type: `string`

Artist to search for.

#### album

Type: `string`

Album to search for.

#### size

Type: `string` 
*possible values:* `small`, `medium`, `large`, `extralarge`, `mega`

Size of image to return.

#### callback(err, url)


## CLI

You can also use it as a CLI app by installing it globally:

```bash
$ npm install --global album-art
```

#### Usage

```bash
$ album-art --help

Usage
  $ album-art [artist] [album] [small|medium|large|extralarge|mega]

Example
  $ album-art 'The Beatles' 'Abbey Road' large
  http://path/to/beatles/abbey_road_large.jpg
```


## License

[MIT](http://opensource.org/licenses/MIT) © [Lacy Morrow](http://lacymorrow.com)

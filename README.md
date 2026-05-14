<div align="center">
  <a href="https://github.com/lacymorrow/movie-art">
    <img src="https://raw.githubusercontent.com/lacymorrow/movie-art/master/.github/assets/logo-horizontal.svg" alt="movie-art" width="320">
  </a>

  <p><strong>Fetch movie and TV poster + backdrop URLs</strong> ➔ "Crash" → http://path/to/crash.jpg</p>

  <p>
    <a href="https://www.npmjs.com/package/movie-art"><img alt="npm version" src="https://img.shields.io/npm/v/movie-art?style=flat"></a>
    <a href="https://www.npmjs.com/package/movie-art"><img alt="npm downloads" src="https://img.shields.io/npm/dm/movie-art?style=flat"></a>
    <a href="https://github.com/lacymorrow/movie-art/actions/workflows/ci.yml"><img alt="CI" src="https://img.shields.io/github/actions/workflow/status/lacymorrow/movie-art/ci.yml?style=flat&label=CI"></a>
    <a href="./LICENSE"><img alt="License" src="https://img.shields.io/npm/l/movie-art?style=flat"></a>
    <a href="https://npm.runkit.com/movie-art"><img alt="Try on RunKit" src="https://img.shields.io/badge/Try-RunKit-f55fa6?style=flat"></a>
  </p>

  <img src="./demo.svg?sanitize=true" alt="movie-art demo" width="700">
</div>

---

> [!IMPORTANT]
> This library is **feature-complete** and only receives bug-fix updates. Feature requests still welcome — please open an issue.

## Features

- Use anywhere — browser or Node, UMD bundle ([browser support](https://caniuse.com/#feat=fetch))
- Works in React + Next.js, client and server, via [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch)
- Promise **and** callback API
- Movies **and** television
- Poster (portrait) or backdrop (landscape) — or both at once
- Multiple poster sizes from TMDB

## Install

```bash
npm install movie-art
```

In the browser:

```html
<!-- movieArt as a window global -->
<script src="https://unpkg.com/movie-art"></script>
```

Also available via [JSDelivr](https://cdn.jsdelivr.net/npm/movie-art/index.min.js).

## Usage

```js
const movieArt = require("movie-art");

movieArt("Oceans Eleven").then(console.log);
//=> http://path/to/oceans_eleven.jpg
```

### Callback form

```js
movieArt("Oceans Eleven", (error, response) => {
  console.log(response);
  //=> http://path/to/oceans_eleven.jpg
});
```

### Year + size options

```js
movieArt("Oceans Eleven", { year: "1960", size: "w92" }).then(console.log);
//=> http://path/to/oceans_eleven_poster_1960_small.jpg
```

### Backdrop + poster at once

```js
movieArt("Oceans Eleven", { output: "all" }).then(console.log);
//=> {
//     poster:   "http://path/to/oceans_eleven_poster.jpg",
//     backdrop: "http://path/to/oceans_eleven_backdrop.jpg",
//   }
```

### Television

```js
movieArt("Star Trek: The Original Series", { type: "tv", output: "all" })
  .then(r => console.log(r.poster));
//=> http://path/to/star_trek_the_original_series_poster.jpg
```

> [!TIP]
> Try it live — [open in RunKit](https://runkit.com/lacymorrow/movie-art) (here's an [example output](https://runkit.io/lacymorrow/movie-art/branches/master?search=Avatar)).

## API

### `movieArt(search [, options] [, callback])`

Accepts a movie or TV show title and returns a Promise resolving to a URL string (or an object, with `output: "all"`).

| Option | Type | Default | Description |
|---|---|---|---|
| `year` | `string` | | Optional release year disambiguator |
| `size` | `"w92" \| "w154" \| "w185" \| "w342" \| "w500" \| "w780" \| "original"` | `"original"` | Poster size |
| `type` | `"movie" \| "tv"` | `"movie"` | Movie or television search |
| `output` | `"poster" \| "backdrop" \| "all"` | `"poster"` | What to return |

The third argument may also be a Node-style `(err, response) => void` callback.

## CLI

```bash
npm install --global movie-art

movie-art --help
#  Usage
#    $ movie-art <search> [flags]
#
#  Flags
#    --year,   -y  Release year
#    --size,   -s  w92 | w154 | w185 | w342 | w500 | w780 | original
#    --type,   -t  tv | movie     (default: movie)
#    --output, -o  poster | backdrop | all  (default: poster)
#
#  Example
#    $ movie-art 'Oceans Eleven' --year 1960 --size w92
#    => http://path/to/oceans_eleven_poster_1960_small.jpg
```

## Related

Part of a small family of media-data utilities:

- [album-art](https://github.com/lacymorrow/album-art) — Fetch album and artist cover art.
- [movie-info](https://github.com/lacymorrow/movie-info) — Get info, images, and ratings about a movie.
- [movie-trailer](https://github.com/lacymorrow/movie-trailer) — Find the trailer for a movie.

## Acknowledgments

- [TMDB](https://www.themoviedb.org) — image data (subject to the [TMDB Terms of Service](https://www.themoviedb.org/documentation/api/terms-of-use)).

## License

[MIT](./LICENSE) © [Lacy Morrow](https://lacymorrow.com)

<div align="center">
  <sub>If movie-art saved you time, consider <a href="https://github.com/sponsors/lacymorrow">sponsoring on GitHub</a>, <a href="https://patreon.com/lacymorrow">supporting on Patreon</a>, or <a href="https://buymeacoffee.com/lm">buying a coffee</a>.</sub>
</div>

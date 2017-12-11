# Spotify Player Wrapper


## Browser Support

This library relies on [Fetch API](https://fetch.spec.whatwg.org/). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## Instructions

### Installing

clone or download the repository
```sh
$ git clone https://github.com/mpfinheiro/spotify-player-wrapper-tdd-course

```

inside the folder install all dependencies:
```sh
$ npm install

```

run with:
```sh
$ npm start

```

The app will be lunch in locahost:8080

## How to use

### ES

#### if you get 401 (unauthorized) go in src/Spotify.js and insert a new token

```js
// Import
import SpotifyWrapper from 'spotify-wrapper-tdd-course';

const spotify = new SpotifyWrapper({
  token: 'YOUR_TOKEN_HERE'
});

export default spotify;
```

#### Get your token at  [Spotify Web Console](https://developer.spotify.com/web-api/console)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

| ![Mateus Fernando](https://avatars2.githubusercontent.com/u/8331550?v=4)|
|:---------------------:|
|  [Mateus Fernando](https://github.com/mfpinheiro/)   |

See also the list of [contributors](https://github.com/willianjusten/spotify-wrapper/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

# zoom-image

[![NPM version](https://img.shields.io/npm/v/zoom-image.svg?style=flat)](https://npmjs.com/package/zoom-image) [![NPM downloads](https://img.shields.io/npm/dm/zoom-image.svg?style=flat)](https://npmjs.com/package/zoom-image) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

This is a fork of [nishanths/zoom.js] (https://github.com/nishanths/zoom.js) which is a vanilla js implementation of [fat/zoom.js](https://github.com/fat/zoom.js), I'm making the fork because the original one never works with a bundler and I don't know how to fix it there.

And the size of original version is `5.42 kB` , while this is `3.7K`.

## Install

```bash
yarn add zoom-image
```

To use in browser, include following JS and CSS in your page, then you can invoke `window.zoom` to setup the image!

```bash
https://unpkg.com/zoom-image/css/zoom-image.css
https://unpkg.com/zoom-image/js/zoom-image.js
```

## Usage

To use with a bundler like [webpack](https://webpack.js.org):

```js
import zoom from 'zoom-image'
import 'zoom-image/css/zoom-image.css'

zoom(document.querySelector('img'))
```

To destroy the listener for the img:

```js
const destroyZoom = zoom(document.querySelector('img'))

// when you no longer need it
// eg: in a SPA component, call:
destroyZoom()
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**zoom-image** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/zoom-image/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)

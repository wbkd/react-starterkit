# Starterkit

This webapp starterkit provides a prepared development environment based on [gulp](https://github.com/gulpjs/gulp), [stylus](https://github.com/LearnBoost/stylus) and [webpack](https://github.com/webpack/webpack).

## Installation

Install all dependencies. 

```
$ npm install
```


## Development

Builds the application and starts a webserver with livereload. By default the webserver starts at port 1337.
You can define a port with `$ gulp --port 3333`.

```
$ gulp
```

Javascript entry file: `app/scripts/main.js` <br />
CSS entry file: `app/stylus/main.styl`<br />

If you want to use third-party CSS you just include it via `@import 'path/to/your/third-party-styles.css'` at the top of the main.styl file.



## Build

Builds a minified version of the application in the dist folder.

```
$ gulp build --type production
```

## Webpack Hints

### Imports Loader

If you want to use plugins for a certain library, that does not require dependencies you can use the [imports loader](http://webpack.github.io/docs/shimming-modules.html#imports-loader). Here the file 'awesome-plugin.js' expects a global variable called jQuery. We can just import that variable via ```jQuery=path/to/jQuery```.

Install the imports loader via:

```
npm install --save imports-loader
```
You can use it in your code like:

```
require("imports?jQuery=../bower_components/jquery/dist/jquery!./awesome-plugin.js");
```




###Requirements
* node
* npm
* bower
* gulp

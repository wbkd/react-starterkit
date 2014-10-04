# Starterkit

We use this repository as a starting point for our web apps.
It provides a prepared development environment based on [gulp](https://github.com/gulpjs/gulp), [stylus](https://github.com/LearnBoost/stylus) and [webpack](https://github.com/webpack/webpack).

## Installation

Install all dependencies. 

```
$ npm install
```

## Development

Builds the application and starts a webserver with livereload. By default the webserver starts at port 1337.
You can define a port with ```$ gulp --port 3333```.

```
$ gulp
```

## Build

Builds the application in the dist folder.

```
$ gulp build --type production
```


###Requirements
* node
* npm
* bower
* gulp

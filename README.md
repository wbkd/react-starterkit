# React Starterkit

This react starterkit provides a prepared development environment based on [gulp](https://github.com/gulpjs/gulp), [stylus](https://github.com/LearnBoost/stylus) and [webpack](https://github.com/webpack/webpack). The internal data flow is handled with  [Reflux](https://github.com/spoike/refluxjs) and the routing is managed with the [React-Router](https://github.com/rackt/react-router). This starterkit does not include some fancy UI stuff but is a lightweight starting point for your next react app.

## Get the kit

```
$ git clone https://github.com/wbkd/react-starterkit.git && cd react-starterkit
```

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

#### Javascript

Javascript entry file: `app/scripts/main.js` <br />

**Reflux**

We are using Reflux, which is an implemantion of the [Flux Architecture](http://facebook.github.io/flux/docs/overview.html). If you want to read more about Reflux, check out the readme of the [reflux git repo](https://github.com/spoike/refluxjs). 

**React-Router**

The routing is done with the react-router. It's especially great for SPA's. We would recommend to read the [guide](https://github.com/rackt/react-router/blob/master/docs/guides/overview.md) to get an overview of the router features.

**ES6 with babel**

We are working with the webpack [babel loader](https://github.com/babel/babel-loader) in order to load our .js/.jsx files. Babel allows you to use ES6 features like class, arrow functions and [much more](https://babeljs.io/docs/compare/).



#### CSS

CSS entry file: `app/stylus/main.styl`<br />

As you can see we are using stylus to preprocess our .styl files. If you didn't work with a css preprocessor before the [stylus page](http://learnboost.github.io/stylus/) is a good starting point to get to know what stylus can do for you.<br />
If you want to use third-party CSS you just include it via `@import 'path/to/your/third-party-styles.css'` at the top of the main.styl file.



## Build

Builds a minified version of the application in the dist folder.

```
$ gulp build --type production
```

## Webpack Hints

We use the jsx-loader in order to load .jsx files via webpack.

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

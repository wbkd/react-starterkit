var entry = './app/scripts/main.js',
  output = {
    path: __dirname,
    filename: 'main.js'
  };

module.exports.development = {
    debug : true,
    devtool : 'eval',
    entry: entry,
    output: output,
    module : {
        loaders : [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
};

module.exports.production = {
    debug: false,
    entry: entry,
    output: output,
    module : {
        loaders : [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
};
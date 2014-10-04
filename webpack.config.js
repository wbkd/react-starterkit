var entry = './app/scripts/main.js',
  output = {
    path: __dirname,
    filename: 'main.js'
  };

module.exports.development = {
    debug : true,
    devtool : 'eval',
    entry: entry,
    output: output 
};

module.exports.production = {
    entry: entry,
    output: output 
};
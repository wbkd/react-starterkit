var utils = require('./utils');

// for example:
// var $ = require('../bower_components/jquery/dist/jquery');

utils.addHelperClasses();

utils.log('is mobile',utils.isMobile);
utils.log('is smartphone',utils.isSmartphone);
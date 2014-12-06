var React = require('react');
var page = require('page');
var Home = require('./pages/home.jsx');
var Info = require('./pages/info.jsx');
var NotFound = require('./pages/notFound.jsx');

var renderPage = function(Page){
  React.render(<Page />, document.body);
};

page('/', function(){ renderPage(Home); });
page('/info', function(){ renderPage(Info); });
page('*', function(){ renderPage(NotFound); });

page();
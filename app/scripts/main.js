var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Home = require('./pages/home.jsx')

var routes = (
  <Route handler={Home} path="/">
    <DefaultRoute handler={Home} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

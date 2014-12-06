var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Header = require('../components/header.jsx')

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <div className="content">
          <RouteHandler/>
        </div>
      </div>
    );
  }
});

module.exports = App;
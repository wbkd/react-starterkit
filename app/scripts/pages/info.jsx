var React = require('react');
var Header = require('../components/header.jsx');

var Info = React.createClass({

  render: function() {
    return (
      <div>
        <Header />
        <h1>Info area</h1>
      </div>
    );
  }

});

module.exports = Info;
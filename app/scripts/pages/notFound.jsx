var React = require('react');

var NotFound = React.createClass({

  render: function() {
    return (
      <div>
        <h1>404!</h1>
        Route not found :/
      </div>
    );
  }

});

module.exports = NotFound;
var React = require('react');
var Header = require('../components/header.jsx')
var ItemList = require('../components/itemList.jsx')

var Home = React.createClass({

  render: function() {
    return (
      <div>
        <Header />
        <ItemList />
      </div>
    );
  }

});

module.exports = Home;
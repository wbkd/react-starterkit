var React = require('react');
var ItemList = require('../components/itemList.jsx')

var Home = React.createClass({

  render() {
    return (
      <div>
        <h1>Home Area</h1>
        <ItemList />
      </div>
    );
  }

});

module.exports = Home;
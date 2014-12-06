var React = require('react');
var ItemStore = require('../stores/itemStore');
var ItemActions = require('../actions/itemActions');

var ItemList = React.createClass({

  getInitialState: function(){
    return {
      items : [],
      loading : false,
      error : false
    }
  },

  componentDidMount: function() {
    this.unsubscribe = ItemStore.listen(this.onStatusChange);
    ItemActions.loadItems();
  },

  onStatusChange: function(state){
    this.setState(state);
  },

  render: function() {

    console.log('loading:',this.state.loading);
    console.log('error:',this.state.error);

    var items = this.state.items.map(function(item,itemIndex){
      return <li key={item}>{item}</li>;
    });

    return (
      <ul>
        {items}
      </ul>
    );
  }

});

module.exports = ItemList;
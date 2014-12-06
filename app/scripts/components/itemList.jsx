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

  componentWillUnmount: function(){
    this.unsubscribe();
  },

  onStatusChange: function(state){
    this.setState(state);
  },

  render: function() {

    var items = this.state.items.map(function(item,itemIndex){
      return <li key={item}>{item}</li>;
    }),
    loading = this.state.loading ? <div>Loading...</div> : '';

    return (
      <div>
        { loading }
        <ul>
          {items}
        </ul>
      </div>
    );
  }

});

module.exports = ItemList;
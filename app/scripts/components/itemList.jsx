import React from 'react';
import ItemStore from '../stores/itemStore';
import ItemActions from '../actions/itemActions';

var ItemList = React.createClass({

  getInitialState() {
    return {
      items : [],
      loading : false,
      error : false
    }
  },

  componentDidMount() {
    this.unsubscribe = ItemStore.listen(this.onStatusChange);
    ItemActions.loadItems();
  },

  componentWillUnmount() {
    this.unsubscribe();
  },

  onStatusChange(state) {
    this.setState(state);
  },

  render() {
    var items = this.state.items.map((item, itemIndex) => <li key={ item }>{ item }</li>),
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
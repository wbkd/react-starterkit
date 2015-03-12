import React from 'react';
import ItemList from '../components/itemList.jsx';
import ItemStore from '../stores/itemStore';
import ItemActions from '../actions/itemActions';

var Home = React.createClass({
  
  getInitialState() {
    return {
      items : [],
      loading: false
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

    return (
      <div>
        <h1>Home Area</h1>
        <ItemList { ...this.state } />
      </div>
    );
  }

});

module.exports = Home;
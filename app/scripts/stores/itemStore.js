import Reflux from 'reflux';
import ItemActions from '../actions/itemActions';

var ItemStore = Reflux.createStore({

  init() {
    this.items = [];

    this.listenTo(ItemActions.loadItems, this.loadItems);
    this.listenTo(ItemActions.loadItemsSuccess, this.loadItemsSuccess);
    this.listenTo(ItemActions.loadItemsError, this.loadItemsError);
  },

  loadItems() {
    this.trigger({ 
      loading: true
    });
  },

  loadItemsSuccess(items) {
    this.items = items;

    this.trigger({ 
      items : this.items,
      loading: false
    });
  },

  loadItemsError(error) {
    this.trigger({ 
      error : error,
      loading: false
    });
  }

});

module.exports = ItemStore;
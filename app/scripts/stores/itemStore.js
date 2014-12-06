var Reflux = require('reflux');
var ItemActions = require('../actions/itemActions');

var ItemStore = Reflux.createStore({

  init : function(){
    this.items = [];

    this.listenTo(ItemActions.loadItems,this.loadItems);
    this.listenTo(ItemActions.loadItemsSuccess,this.loadItemsSuccess);
    this.listenTo(ItemActions.loadItemsError,this.loadItemsError);
  },

  loadItems: function(){
    this.trigger({ 
      loading: true
    });
  },

  loadItemsSuccess: function(items){
    this.items = items;

    this.trigger({ 
      items : this.items,
      loading: false
    });
  },

  loadItemsError: function(error){
    this.trigger({ 
      error : error,
      loading: false
    });
  }

});

module.exports = ItemStore;
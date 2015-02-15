import Reflux from 'reflux';

var ItemActions = Reflux.createActions([
  'loadItems',
  'loadItemsSuccess',
  'loadItemsError'
]);

ItemActions.loadItems.preEmit = function(data){
  // make your api call/ async stuff here
  // we use setTimeout for faking async behaviour here
  setTimeout(function(){
    var items = ['Foo', 'Bar', 'Lorem'];
    ItemActions.loadItemsSuccess(items);

    // on error
    // ItemActions.loadItemsError('an error occured');
  },500);
};

module.exports = ItemActions;
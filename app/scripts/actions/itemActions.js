import Reflux from 'reflux';

const ItemActions = Reflux.createActions({
  'loadItems': {children: ['completed', 'failed']}
});

ItemActions.loadItems.listen(function(){
  // make your api call/ async stuff here
  // we use setTimeout for faking async behaviour here
  setTimeout(() => {
    const items = ['Foo', 'Bar', 'Lorem'];
    this.completed(items);

    // on error
    // this.failed('an error occured');
  }, 500);
});

export default ItemActions;
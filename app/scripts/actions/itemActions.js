import alt from '../alt';

class ItemActions {
  constructor() {
    this.generateActions(
      'loadItemsSuccess',
      'loadItemsError'
    );
  }

  loadItems(data) {
    // make your api call/ async stuff here
    // we use setTimeout for faking async behaviour here
    setTimeout(() => {
      var items = ['Foo', 'Bar', 'Lorem'];
      this.actions.loadItemsSuccess(items);

      // on error
      // ItemActions.loadItemsError('an error occured');
    }, 500);
  }
}

export default alt.createActions(ItemActions);

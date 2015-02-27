import alt from '../alt';
import ItemActions from '../actions/itemActions';

class ItemStore {
  constructor() {
    this.items = [];
    this.loading = false;
    this.error = null;

    this.bindListeners({
      loadItems: ItemActions.loadItems,
      loadItemsSuccess: ItemActions.loadItemsSuccess,
      loadItemsError: ItemActions.loadItemsError
    });
  }

  loadItems() {
    this.loading = true;
  }

  loadItemsSuccess(items) {
    this.items = items;
    this.loading = false;
  }

  loadItemsError(error) {
    this.error = error;
    this.loading = false;
  }
}

export default alt.createStore(ItemStore, 'ItemStore');

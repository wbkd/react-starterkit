import React from 'react';

class ItemList extends React.Component {
  
  constructor(){
    super();
  }

  render() {
    var items = this.props.items.map(item => <li key={ item }>{ item }</li>),
      loading = this.props.loading ? <div className="loading-label">Loading...</div> : '';

    return (
      <div>
        { loading }
        <ul>
          { items }
        </ul>
      </div>
    );
  }
                                     
}

ItemList.propTypes = {
  loading : React.PropTypes.bool,
  items : React.PropTypes.array
}

export default ItemList;
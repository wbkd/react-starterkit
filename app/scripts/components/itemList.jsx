import React from 'react';

var ItemList = React.createClass({

  propTypes: {
    loading : React.PropTypes.bool,
    items : React.PropTypes.array
  },

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
                                     
});

module.exports = ItemList;
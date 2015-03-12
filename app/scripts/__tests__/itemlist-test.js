// __tests__/itemlist-test.js

jest.dontMock('../components/itemList.jsx');

var React = require('react/addons');
var ItemList = require('../components/itemList.jsx');

var TestUtils = React.addons.TestUtils;

describe('item list', function() {

  it('displays three items with right text content', function() {

    var testItems = ['foo', 'bar', 'wut'],
      itemList = TestUtils.renderIntoDocument(<ItemList items={ testItems } loading={ false } />),
      renderedItems = TestUtils.scryRenderedDOMComponentsWithTag(itemList, 'li'),
      itemCount = renderedItems.length;

    expect(itemCount).toBe(3);

    expect(renderedItems[0].getDOMNode().textContent).toEqual('foo');
    expect(renderedItems[1].getDOMNode().textContent).toEqual('bar');
    expect(renderedItems[2].getDOMNode().textContent).toEqual('wut');
  });

  it('displays loading div', function() {
    var itemList = TestUtils.renderIntoDocument(<ItemList items={ [] } loading={ true } />),
      loadingDiv = TestUtils.findRenderedDOMComponentWithClass(itemList, 'loading-label');

    expect(loadingDiv.getDOMNode().textContent).toEqual('Loading...');
  });

});
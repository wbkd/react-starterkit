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

    expect(React.findDOMNode(renderedItems[0]).textContent).toEqual('foo');
    expect(React.findDOMNode(renderedItems[1]).textContent).toEqual('bar');
    expect(React.findDOMNode(renderedItems[2]).textContent).toEqual('wut');
  });

  it('displays loading div', function() {
    var itemList = TestUtils.renderIntoDocument(<ItemList items={ [] } loading={ true } />),
      loadingDiv = TestUtils.findRenderedDOMComponentWithClass(itemList, 'loading-label');

    expect(React.findDOMNode(loadingDiv).textContent).toEqual('Loading...');
  });

});
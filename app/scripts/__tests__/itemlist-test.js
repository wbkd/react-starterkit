// __tests__/itemlist-test.js

jest.dontMock('../components/itemList.jsx');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var ItemList = require('../components/itemList.jsx');

describe('item list', function() {

  it('displays three items with right text content', function() {

    var testItems = ['foo', 'bar', 'wut'],
      itemList = TestUtils.renderIntoDocument(<div><ItemList items={ testItems } loading={ false } /></div>);

    expect(ReactDOM.findDOMNode(itemList).textContent).toEqual(testItems.join(''));
  });

  it('displays loading div', function() {
    var itemList = TestUtils.renderIntoDocument(<div><ItemList items={[]} loading={ true } /></div>);

    expect(ReactDOM.findDOMNode(itemList).textContent).toEqual('Loading...');
  });

});
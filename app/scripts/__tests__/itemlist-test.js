// __tests__/itemlist-test.js

jest.dontMock('../components/itemList.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

let ItemList = require('../components/itemList.jsx');

describe('item list', function() {

  it('displays three items with right text content', function() {

    const testItems = ['foo', 'bar', 'wut'],
      itemList = TestUtils.renderIntoDocument(<div><ItemList items={ testItems } loading={ false } /></div>);

    expect(ReactDOM.findDOMNode(itemList).textContent).toEqual(testItems.join(''));
  });

  it('displays loading div', function() {
    const itemList = TestUtils.renderIntoDocument(<div><ItemList items={[]} loading={ true } /></div>);

    expect(ReactDOM.findDOMNode(itemList).textContent).toEqual('Loading...');
  });
});
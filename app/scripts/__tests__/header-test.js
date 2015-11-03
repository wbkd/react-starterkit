// __tests__/header-test.js

/*

not working for now

jest.dontMock('../components/header.jsx');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var Header = require('../components/header.jsx');

describe('header', function() {

  it('displays two nav items with right text content', function() {

    var header = TestUtils.renderIntoDocument(<Header />);
      renderedItems = TestUtils.scryRenderedDOMComponentsWithTag(header, 'a'),
      itemCount = renderedItems.length;

    expect(itemCount).toBe(2);

    expect(ReactDOM.findDOMNode(renderedItems[0]).textContent).toEqual('Home');
    expect(ReactDOM.findDOMNode(renderedItems[1]).textContent).toEqual('Info');
  });

});
*/
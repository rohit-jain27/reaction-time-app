import React from 'react';
import chai, {expect} from 'chai';
import jsxChai from 'jsx-chai';
chai.use(jsxChai);
import App from './App.jsx'
import Grid from './Grid.jsx'
import ReactTestUtils from 'react-addons-test-utils' // ES6

describe('sample tests', () => {
  it('adds to 3', () => {

    const component = ReactTestUtils.renderIntoDocument(
       <App/>
    );

    const todo = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'div');
    expect(todo).to.be.ok;
  })
})

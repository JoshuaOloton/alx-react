import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component tests', () => {
  it('should render App component', () => {
    shallow(<App />)
  })
  
  it('should render a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header')).toBeDefined();
  })

  it('should render a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body')).toBeDefined();
  })
  
  it('should render a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer')).toBeDefined();
  })
})
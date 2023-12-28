import React from 'react';
import App from './App';

test('App component tests', () => {
  it('should render App component', () => {
    render(<App />)
  })
  
  it('should render a div with the class App-header', () => {
    const wrapper = render(<App />);
    expect(wrapper.find('.App-header')).toBeDefined();
  })

  it('should render a div with the class App-body', () => {
    const wrapper = render(<App />);
    expect(wrapper.find('.App-body')).toBeDefined();
  })
  
  it('should render a div with the class App-footer', () => {
    const wrapper = render(<App />);
    expect(wrapper.find('.App-footer')).toBeDefined();
  })
})
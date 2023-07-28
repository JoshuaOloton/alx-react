import React from 'react';
import { shallow } from 'enzyme';
import { Notifications } from './Notifications';

describe('App component tests', () => {
  it('should render App component', () => {
    shallow(<Notifications />)
  })
  
  it('should renders three li items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li')).toHaveLength(3);
  })

  it('should render a div with the class App-body', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
  })
})
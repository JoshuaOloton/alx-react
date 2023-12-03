import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders correct html with dummy type and value props', () => {
    const type = 'default';
    const value = 'test';
    const wrapper = shallow(<NotificationItem type={type} value={value} />);
    expect(wrapper.text()).toEqual(value);
    expect(wrapper.prop('data-notification-type')).toEqual(type);
  });

  it('renders correct html with dummy html prop', () => {
    const html = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem html={html} />);
    expect(wrapper.html()).toContain(html.__html);
  });
});


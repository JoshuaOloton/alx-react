import { shallow } from 'enzyme';
import React from 'react';
import { Header } from './Header';
import { StyleSheetTestUtils } from 'aphrodite';

const TEST_USER = { email: 'michael@mifflin.com', password: 'pippity' };

describe('Testing the Header component', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('renders img element', () => {
    const wrapper = shallow(<Header user={TEST_USER} />);
    wrapper.update();
    expect(wrapper.find('div img')).toHaveLength(1);
  });

  it('renders h1 element', () => {
    const wrapper = shallow(<Header user={TEST_USER} />);
    wrapper.update();
    expect(wrapper.find('div h1')).toHaveLength(1);
  });

  it('does not create the logoutSection when mounted with a default context value', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('#logoutSection')).toHaveLength(0);
  });

  it('creates the logoutSection when mounted with a user defined (isLoggedIn is true and an email is set)', () => {
    const wrapper = shallow(<Header user={TEST_USER} />);
    expect(wrapper.find('#logoutSection')).toHaveLength(1);
  });
});

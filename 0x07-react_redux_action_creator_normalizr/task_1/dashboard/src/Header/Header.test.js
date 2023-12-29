import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';


describe('Testing the Header Component', () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Header />);
  });

  it("Renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("Renders an h1 tag", () => {
    expect(wrapper.find('h1')).toBeDefined();
  });

  it(`tests that the logoutSection is not rendered with default context values`, () => {
		const contextObject = {
			user: {
				email: '',
				password: '',
				isLoggedIn: false
			},
			logOut: jest.fn()
		}

		wrapper = mount(
			<AppContext.Provider value={contextObject}>
				<Header />
			</AppContext.Provider>
		)

		expect(wrapper.find('#logoutSection').length).toBe(0);
		expect(wrapper.find('#logoutSection').exists()).toBe(false);
		wrapper.unmount();
	})

	it(`Tests that logoutSection is rendered with context values`, () => {
		const contextObject = {
			user: {
				email: 'testing@demo.com',
				password: 'testing',
				isLoggedIn: true
			},
			logOut: jest.fn()
		}

		wrapper = mount(
			<AppContext.Provider value={contextObject}>
				<Header />
			</AppContext.Provider>
		)

		expect(wrapper.find('#logoutSection').length).toBe(1);
		expect(wrapper.find('#logoutSection').exists()).toBe(true);
		wrapper.unmount();
	})

	it(`Verifies that the logOut function is called when clicking on logOut link`, () => {
		const contextObject = {
			user: {
				email: 'testing@demo.com',
				password: 'testing',
				isLoggedIn: true
			},
			logOut: jest.fn()
		}

		const spy = jest.spyOn(contextObject, 'logOut');

		wrapper = mount(
			<AppContext.Provider value={contextObject}>
				<Header />
			</AppContext.Provider>
		)

		wrapper.find('a').simulate('click');

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledTimes(1);
		wrapper.unmount();
	})
});
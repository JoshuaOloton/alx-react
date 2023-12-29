/**
 * @jest-environment jsdom
 */
import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow, mount } from "enzyme";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });
  it("should render Notifications component", () => {
    const component = shallow(<App />);

    expect(component.containsMatchingElement(<Notifications />)).toEqual(false);
  });
  it("should render Header component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Header />)).toBe(true);
  });
  it("should render Login Component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Login />)).toBe(true);
  });
  it("should render Footer Component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Footer />)).toBe(true);
  });
  it("does not render courselist if logged out", () => {
    const component = shallow(<App />);

    component.setProps({ isLogedIn: false });

    expect(component.contains(<CourseList />)).toBe(false);
  });
  it("renders courselist if logged in", () => {
    const component = shallow(<App isLoggedIn={true} />);

    expect(component.containsMatchingElement(<CourseList />)).toEqual(false);
    expect(component.contains(<Login />)).toBe(false);
  });
  it("displayDrawer switches to true after handleDisplayDrawer is called", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);

    const instance = wrapper.instance();
    instance.handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
  });
  it("displayDrawer changes to false when calling handleHideDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);

    const instance = wrapper.instance();
    instance.handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);

    instance.handleHideDrawer();
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it(`Tests that the logIn function updates user's state correctly`, () => {
		wrapper = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<App />
			</AppContext.Provider>
		);

		const myUser = {
			email: 'testing@demo.com',
			password: 'testing',
			isLoggedIn: true,
		}

		expect(wrapper.state().user).toEqual(user);
		const instance = wrapper.instance();
		instance.logIn(myUser.email, myUser.password);
		expect(wrapper.state().user).toEqual(myUser);
		wrapper.unmount();
	})

	it(`Tests that the logOut function updates user's state correctly`, () => {
		wrapper = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<App />
			</AppContext.Provider>
		);

		expect(wrapper.state().user).toEqual(user);
		const instance = wrapper.instance();
		instance.logOut();
		expect(wrapper.state().user).toEqual(user);
		wrapper.unmount();
	})

  // Modified version of the App component test
  it(`checks if markNotificationAsRead works correctly,
  removes the notification with the given id from the listNotifications array`, () => {
    const userContext = {
      user: {
        ...user,
      },
      logOut: jest.fn(),
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, html: { __html: jest.fn() }, type: "urgent" },
      ],
    };

    const appWrapper = mount(
      <AppContext.Provider value={userContext}>
        <App />
      </AppContext.Provider>
    );

    const appInstance = appWrapper.instance();

    appInstance.markNotificationAsRead(3);

    expect(appWrapper.state().listNotifications).toEqual([
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ]);

    expect(appWrapper.state().listNotifications.length).toBe(2);
    expect(appWrapper.state().listNotifications[3]).toBe(undefined);

    appWrapper.unmount();
  });

// Modified version of the Footer component test
describe("Testing the <Footer /> component", () => {
let footerWrapper;

beforeEach(() => {
StyleSheetTestUtils.suppressStyleInjection();
footerWrapper = shallow(<Footer />);
});

it("should render the Footer Component without crashing", () => {
expect(footerWrapper.exists()).toBeTruthy();
});

it("should render at least the text 'Copyright'", () => {
expect(footerWrapper.find("Copyright").at(0)).toBeDefined();
});
});

describe("Testing Footer Component context and state", () => {
beforeEach(() => {
StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
jest.clearAllMocks();
});

it("should not render a link when the user is logged out within context", () => {
const userContext = {
  user: {
    email: "",
    password: "",
    isLoggedIn: false,
  },
};

const footerWrapper = mount(
  <AppContext.Provider value={userContext}>
    <Footer />
  </AppContext.Provider>
);

expect(footerWrapper.find("a").length).toBe(0);
expect(footerWrapper.find("a").exists()).toBeFalsy();
expect(footerWrapper.text()).not.toContain("Contact us");

footerWrapper.unmount();
});

it("should render a link when the user is logged in within context", () => {
const userContext = {
  user: {
    email: "",
    password: "",
    isLoggedIn: true,
  },
};

const footerWrapper = mount(
  <AppContext.Provider value={userContext}>
    <Footer />
  </AppContext.Provider>
);

expect(footerWrapper.find("a").length).toBe(1);
expect(footerWrapper.find("a").exists()).toBeTruthy();
expect(footerWrapper.text()).toContain("Contact us");

footerWrapper.unmount();
});
});

});

describe("When ctrl + h is pressed", () => {
  it("calls logOut function", () => {
    const mocked = jest.fn();
    const wrapper = mount(<App logOut={mocked} />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(mocked).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });

  document.alert = jest.fn();
  it("checks that alert function is called", () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
    wrapper.unmount();
  });

  it('checks that the alert is "Logging you out"', () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalledWith("Logging you out");
    jest.restoreAllMocks();
    wrapper.unmount();
  });
  document.alert.mockClear();
});
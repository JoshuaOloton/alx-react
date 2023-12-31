import { shallow } from 'enzyme';
import React from 'react';
import { Footer } from './Footer';
import AppContext from '../App/AppContext';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('renders the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('div.footer p')).toHaveLength(1);
    expect(wrapper.find('div.footer p').text()).toContain('Copyright');
  });

  it('does not display the link when the user is logged out within the context', () => {
    const wrapper = shallow(<Footer user={null} />);
    expect(wrapper.find('div.footer a')).toHaveLength(0);
  });

  it('displays the link when the user is logged in within the context', () => {
    const wrapper = shallow(
      <Footer user={{ email: 'larry@hd.com', password: '123456' }} />
    );
    expect(wrapper.find('div.footer a')).toHaveLength(1);
    expect(wrapper.find('div.footer a').text()).toEqual('Contact us');
  });
});

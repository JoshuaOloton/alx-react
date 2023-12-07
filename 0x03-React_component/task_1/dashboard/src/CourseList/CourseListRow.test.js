import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';

describe('CourseListRow', () => {
  describe('when isHeader is true', () => {

    it('should render two cells when textSecondCell is present', () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First Cell" textSecondCell="Second Cell" />);
      expect(wrapper.find('tr').length).toBe(1);
      expect(wrapper.find('th').length).toBe(2);
      expect(wrapper.find('th').at(0).text()).toBe('First Cell');
      expect(wrapper.find('th').at(1).text()).toBe('Second Cell');
    });
  });

  describe('when isHeader is false', () => {
    it('should render correctly two td elements within a tr element', () => {
      const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="First Cell" textSecondCell="Second Cell" />);
      expect(wrapper.find('tr').length).toBe(1);
      expect(wrapper.find('td').length).toBe(2);
      expect(wrapper.find('td').at(0).text()).toBe('First Cell');
      expect(wrapper.find('td').at(1).text()).toBe('Second Cell');
    });
  });
});

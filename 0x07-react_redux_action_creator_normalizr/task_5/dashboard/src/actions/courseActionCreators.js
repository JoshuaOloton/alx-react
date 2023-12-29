import { UNSELECT_COURSE, SELECT_COURSE } from './courseActionTypes';

export const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index,
  };
};

export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index,
  };
};

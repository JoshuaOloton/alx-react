import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

const initialState = [];

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map((course) => {
        return {
          ...course,
          isSelected: false,
        };
      });

    case SELECT_COURSE:
      return state.map((course, index) => {
        const current = {
          ...course,
        };
        if (course.id == action.index) current.isSelected = true;

        return current;
      });

    case UNSELECT_COURSE:
      return state.map((course) => {
        const current = {
          ...course,
        };
        if (course.id == action.index) current.isSelected = false;

        return current;
      });

    default:
      return state;
  }
};

export default courseReducer;
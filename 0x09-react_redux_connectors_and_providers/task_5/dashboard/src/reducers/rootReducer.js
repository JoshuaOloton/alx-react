import courseReducer, { initialCourseState } from './courseReducer';
import notificationReducer, { initialNotificationState } from './notificationReducer';
import uiReducer, { initialState } from './uiReducer';
import { Map } from 'immutable';

export const initialRootState = {
	courses: Map(initialCourseState),
	notifications: Map(initialNotificationState),
	ui: Map(initialState),
};

const rootReducer = {
	courses: courseReducer,
	notifications: notificationReducer,
	ui: uiReducer,
};

export default rootReducer;
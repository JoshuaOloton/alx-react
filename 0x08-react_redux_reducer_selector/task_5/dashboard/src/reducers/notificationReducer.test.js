import {
  markNotificationAsRead,
  setNotificationFilter,
  fetchNotificationsSuccess,
} from '../actions/notificationActionCreators';
import { notificationReducer } from './notificationReducer';

describe('Tests for the notification reducer', () => {
  const initialState = {
    notifications: [],
    filter: 'DEFAULT',
  };

  it('Ensures the default state is returned when no action is provided', () => {
    expect(notificationReducer(initialState, 'null')).toEqual(initialState);
  });

  it('Marks the correct notification as read', () => {
    const testData = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
    };

    const expectedOutput = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
    };

    expect(notificationReducer(testData, markNotificationAsRead(2))).toEqual(
      expectedOutput
    );
  });

  it('Changes the notification filter', () => {
    const testData = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
    };

    const expectedOutput = {
      filter: 'URGENT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
    };

    expect(
      notificationReducer(testData, setNotificationFilter('URGENT'))
    ).toEqual(expectedOutput);
  });

  it('Returns the correct state on successful fetch', () => {
    const testData = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
    };

    expect(notificationReducer(initialState, fetchNotificationsSuccess())).toEqual(
      testData
    );
  });
});

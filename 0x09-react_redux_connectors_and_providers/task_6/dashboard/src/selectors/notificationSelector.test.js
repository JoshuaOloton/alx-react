import {
  filterSelectedType,
  retrieveNotifications,
  retrieveUnreadNotifications,
} from './notificationSelector';
import { markNotificationAsRead } from '../actions/notificationActionCreators';
import notificationReducer from '../reducers/notificationReducer';
import { notificationsNormalizer } from '../schema/notifications';
import { Map } from 'immutable';

const initialNotificationState = Map({
  notifications: [],
  filter: 'DEFAULT',
});

const sampleNotificationState = {
  filter: 'DEFAULT',
  notifications: [
    {
      id: 1,
      isRead: false,
      type: 'default',
      value: 'New course available',
    },
    {
      id: 2,
      isRead: false,
      type: 'urgent',
      value: 'New resume available',
    },
    {
      id: 3,
      isRead: false,
      type: 'urgent',
      value: 'New data available',
    },
  ],
};

describe('Tests for notificationSelector', () => {
  it('Retrieves the selected filter as expected', () => {
    const selectedFilter = filterSelectedType(initialNotificationState);
    expect(selectedFilter).toEqual('DEFAULT');
  });

  it('Retrieves notifications as expected', () => {
    const normalizedNotifications = notificationsNormalizer(sampleNotificationState);
    expect(retrieveNotifications(normalizedNotifications)).toEqual(
      normalizedNotifications.notifications
    );
  });
});

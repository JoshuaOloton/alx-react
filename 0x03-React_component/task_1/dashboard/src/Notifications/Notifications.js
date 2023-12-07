import React from 'react';
import './Notifications.css';
import closeIcon from "../assets/close-icon.png"
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

const Notifications = ({ displayDrawer, listNotifications }) => {
  return (
    <div className='notifications-wrapper'>
      <div className='menuItem'>
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className='Notifications'>
          <button
            style={{ float: "right" }}
            aria-label="Close"
            onClick={() => console.log("Close button has been clicked")}
          >
            <img src={closeIcon} alt="closeIcon" width="10px" />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            {listNotifications && listNotifications.length > 0 ? 
            (listNotifications.map(notification => <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} />)) : 
            (<NotificationItem value="No new notification for now" />)}
          </ul>
      </div>
      )}
      
      
    </div>
  )
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications

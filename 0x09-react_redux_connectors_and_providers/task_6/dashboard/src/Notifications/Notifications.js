import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropeTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';
import { fetchNotifications } from '../actions/notificationActionCreators';
import { connect } from 'react-redux';
import { getUnreadNotifications } from "../selectors/notificationSelector";

class Notifications extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
		this.props.fetchNotifications();
	}

  render() {
    return (
      <>
        {!this.props.displayDrawer ?
          <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
            Your notifications
          </div>
        :
          <div className={css(styles.Notifications)}>
            <button style={{
              color: '#3a3a3a',
              fontWeight: 'bold',
              background: 'none',
              border: 'none',
              fontSize: '15px',
              position: 'absolute',
              right: '3px',
              top: '3px',
              cursor: 'pointer',
              outline: 'none',
            }}
            aria-label="Close"
            className={css(styles.button)}
            onClick={handleHideDrawer}
            >
              <img src={closeIcon} alt="close icon" width="15px" />
            </button>
            {this.props.listNotifications.length != 0 ? <p>Here is the list of notifications</p> : null}
            <ul className={css(styles.ul)}>
              {this.props.listNotifications.length == 0 ? <NotificationItem type="default" value="No new notification for now" /> : null}
              {this.props.listNotifications.map((val, idx) => {
                return <NotificationItem type={val.type} value={val.value} html={val.html} key={val.id} markAsRead={this.markNotificationAsRead} id={val.id} />;
              })}
            </ul>
          </div>
        }
        
      </>
    );
  }
}

const animationOpacity = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1}
};

const animationBounce = {
  '0%': { transform: 'translateY(0px)' },
  '33%': { transform: 'translateY(-5px)'},
  '66%': { transform: 'translateY(5px)'},
  '100%': { transform: 'translateY(0px)'},
};

const styles = StyleSheet.create({
	Notifications: {
    padding: "1em",
    border: "2px dashed red",
    position: "absolute",
    top: "1.8em",
    right: "0.6em",
    '@media (max-width: 900px)': {
      width: '100%',
      padding: '0px',
      fontSize: 20,
      position: 'relative',
      right: 0,
      left: 0,
      border: 'none',
    }
	},
  menuItem: {
    textAlign: "right",
    backgroundColor: '#fff8f8',
    position: 'relative',
    float: 'right',
    zIndex: 100,
    ':hover': {
      cursor: 'pointer',
      animationName: [animationOpacity, animationBounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3'
    }
  },
  ul: {
    '@media (max-width: 900px)': {
      padding: 0
    }
  },
  '[data-notification-type="default"]': {
    color: "blue",
  },

  "[data-urgent]": {
    color: "red",
  },

  '[data-notification-type="urgent"]': {
    color: "red",
  },
  button: {
    '@media (max-width: 900px)': {
      position: 'relative',
      float: 'right',
    }
  }
});

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
	fetchNotifications: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropeTypes.bool,
  listNotifications: PropeTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropeTypes.func,
  handleHideDrawer: PropeTypes.func,
  markNotificationAsRead: PropTypes.func,
};


const mapStateToProps = (state) => {
  const unreadNotifications = getUnreadNotifications(state);

  return {
    listNotifications: unreadNotifications,
  };
};

const mapDispatchToProps = {
	fetchNotifications,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

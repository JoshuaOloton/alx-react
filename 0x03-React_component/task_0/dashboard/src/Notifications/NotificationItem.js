import React from 'react';
import PropTypes from "prop-types";

const NotificationItem = ({ type, html, value }) => {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}>{ value }</li>
  )
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem
import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.selected_style = this.props.type === 'default' ?  itemStyles.default : itemStyles.urgent;
  }

  render() {
    const { type, value, html, markAsRead, id } = this.props;
    return (
      <>
        {type && value ? (
          <li
            onClick={() => markAsRead(id)}
            data-notification-type={type}
            className={type === 'default' ? css(styles.default) : css(styles.urgent)}>
            {value}
          </li>
        ) : null}
        {html ? 
          <li
            onClick={() => markAsRead(id)}
            data-urgent dangerouslySetInnerHTML={{ __html: html }}
            className={type === 'default' ? css(styles.default) : css(styles.urgent)}>
            </li> : null}
      </>
    );
  }
}

const styles = StyleSheet.create({
  urgent: {
		color: 'red'
	},

	default: {
		color: 'blue'
	}
});

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {
    console.log("empty func");
  },
  id: 0,
};

export default NotificationItem;
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {

  const rowStyle = {backgroundColor: '#f5f5f5ab'}

  const rowHeaderStyle = {backgroundColor: '#deb5b545'}

  return (
    <tr style={rowStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th className={css(styles.th), css(styles.center)} colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th className={css(styles.th)}>{textFirstCell}</th>
            <th className={css(styles.th)}>{textSecondCell}</th>
          </>
        )
        
      ) : (
        <>
          <td className={css(styles.td)}>{textFirstCell}</td>
          <td className={css(styles.td)}>{textSecondCell}</td>
        </>
      )}
      
    </tr>
  )
}

const styles = StyleSheet.create({
  th: {
    borderBottom: '1px solid gray',
    margin: 0,
    padding: 0,
    textAlign: 'left'
  },

  td: {
    paddingLeft: 3
  },

  center: {
    textAlign: 'center'
  },
});

CourseListRow.propTypes = {
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default CourseListRow
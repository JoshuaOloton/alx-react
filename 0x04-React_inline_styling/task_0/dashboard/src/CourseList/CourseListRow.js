import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {

  const rowStyle = {backgroundColor: '#f5f5f5ab'}

  const rowHeaderStyle = {backgroundColor: '#deb5b545'}

  return (
    <tr style={rowStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th style={rowHeaderStyle} colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th style={rowHeaderStyle}>{textFirstCell}</th>
            <th style={rowHeaderStyle}>{textSecondCell}</th>
          </>
        )
        
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
      
    </tr>
  )
}

CourseListRow.propTypes = {
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default CourseListRow
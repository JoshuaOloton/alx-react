import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell, isChecked, onChangedRow }) => {

  const [checked, setChecked] = useState(false);
  const rowStyle = {backgroundColor: '#f5f5f5ab'}
  const rowHeaderStyle = {backgroundColor: '#deb5b545'}

  const handleCheckbox = () => {
    onChangeRow(id, !isChecked);
  };

  return (
    <tr style={rowStyle} className={checked ? css(styles.rowChecked) : ""}>
      {isHeader ? (
        textSecondCell === null ? (
          <th className={css(styles.th, styles.center)} colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th className={css(styles.th)}>{textFirstCell}</th>
            <th className={css(styles.th)}>{textSecondCell}</th>
          </>
        )
        
      ) : (
        <>
          <td className={css(styles.td)}>
            <input type="checkbox" onChange={handleCheckbox} />
          {textFirstCell}
          </td>
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

  rowChecked: {
    backgroundColor: "#e6e4e4",
  },
});

CourseListRow.defaultProps = {
  textSecondCell: null,
  id: null,
  isHeader: false,
  isChecked: false,
  onChangeRow: () => {},
};

CourseListRow.propTypes = {
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isChecked: PropTypes.bool,
  onChangeRow: PropTypes.func,
}

export default CourseListRow
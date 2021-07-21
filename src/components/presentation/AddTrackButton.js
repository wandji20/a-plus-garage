import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AddTrackButton = () => {
  // const { style } = props;
  const style = {
    display: 'block',
    marginTop: '200px',
  };
  return (
    <Link to="/new_car" style={style}>
      <button type="button" className="btn btn-info">
        Track Car
      </button>
    </Link>
  );
};

// AddTrackButton.propTypes = {
//   style: PropTypes.objectOf(PropTypes.string),
// };

// AddTrackButton.defaultProps = {
//   style: {},
// };

export default AddTrackButton;

import React from 'react';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Button = () => {
  const handleCarDelete = () => {
    console.log('in handleDelete');
  };
  return (
    <button
      id="remove-car-btn"
      type="button"
      className="btn bg-danger"
      onClick={handleCarDelete}
    >
      <span className="d-inline-block mx-1">
        Untrack
      </span>
      <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  );
};

// Button.propTypes = {
//   style: PropTypes.objectOf(PropTypes.string),
// };

// Button.defaultProps = {
//   style: {},
// };

export default Button;

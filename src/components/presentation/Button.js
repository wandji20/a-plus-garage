import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Button = (props) => {
  const { style } = props;
  const condition = false;
  const handlePartTrack = () => {
    if (condition) {
      console.log(condition);
    }
  };
  return (
    <button
      style={style}
      id="track-part-btn"
      type="button"
      className="btn text-dark"
      onClick={handlePartTrack}
    >
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
};

Button.defaultProps = {
  style: {},
};

export default Button;

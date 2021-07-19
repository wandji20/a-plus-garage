import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Button = () => {
  const condition = false;
  const handlePartTrack = () => {
    if (condition) {
      console.log(condition);
    }
  };
  return (
    <button
      id="track-part-btn"
      type="button"
      className="btn position-absolute text-dark fs-4"
      onClick={handlePartTrack}
    >
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
};

export default Button;

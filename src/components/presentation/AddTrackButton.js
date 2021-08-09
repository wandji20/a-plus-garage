import React from 'react';
import { Link } from 'react-router-dom';

const AddTrackButton = () => {
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

export default AddTrackButton;

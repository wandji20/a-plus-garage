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
        Add Car
      </button>
    </Link>
  );
};

export default AddTrackButton;

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import deleteCarAction from '../../redux/actions/deleteCarAction';

const Button = (props) => {
  const { handleDeleteCarACtion, id } = props;
  const handleDeleteCar = () => {
    handleDeleteCarACtion(id);
  };
  return (
    <button
      id="remove-car-btn"
      type="button"
      className="btn bg-danger"
      onClick={handleDeleteCar}
    >
      <span className="d-inline-block mx-1">
        Untrack
      </span>
      <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleDeleteCarACtion: (id) => {
    dispatch(deleteCarAction(id));
  },
});

Button.propTypes = {
  id: PropTypes.number,
  handleDeleteCarACtion: PropTypes.func.isRequired,
};

Button.defaultProps = {
  id: 0,
};

export default connect(null, mapDispatchToProps)(Button);

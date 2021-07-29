import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import deleteCarAction from '../../redux/actions/deleteCarAction';

const Button = (props) => {
  const { handleDeleteCarACtion, id, index } = props;
  const handleDeleteCar = () => {
    handleDeleteCarACtion(id, index);
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
  handleDeleteCarACtion: (id, index) => {
    dispatch(deleteCarAction(id, index));
  },
});

const mapStateToProps = (state) => ({
  index: state.filterReducer.index,
});

Button.propTypes = {
  id: PropTypes.number,
  index: PropTypes.number.isRequired,
  handleDeleteCarACtion: PropTypes.func.isRequired,
};

Button.defaultProps = {
  id: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);

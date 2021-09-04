import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { deleteCar } from '../../redux/actions/carsAction';

const Button = (props) => {
  const { handleDeleteCarAction, id, index } = props;
  const handleDeleteCar = () => {
    handleDeleteCarAction(id, index);
  };
  return (
    <button
      id="remove-car-btn"
      type="button"
      className="btn bg-danger"
      onClick={handleDeleteCar}
    >
      <span className="d-inline-block mx-1">
        Delete Car
      </span>
      <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleDeleteCarAction: (id, index) => {
    dispatch(deleteCar(id, index));
  },
});

const mapStateToProps = (state) => ({
  index: state.filterReducer.index,
});

Button.propTypes = {
  id: PropTypes.number,
  index: PropTypes.number.isRequired,
  handleDeleteCarAction: PropTypes.func.isRequired,
};

Button.defaultProps = {
  id: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);

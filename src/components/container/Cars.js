import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Car from '../presentation/Car';
import AddTrackButton from '../presentation/AddTrackButton';
import setFilterAction from '../../redux/actions/setFilterAction';

const Cars = (props) => {
  const {
    cars, index, handleSetFilterAction, loggedIn,
  } = props;

  useEffect(() => {

  }, [cars]);

  const handleNextChange = () => {
    if (index < cars.length - 1) {
      const newIndex = index + 1;
      handleSetFilterAction(newIndex);
    }
  };

  const handlePrevChange = () => {
    if (index > 0) {
      const newIndex = index - 1;
      handleSetFilterAction(newIndex);
    }
  };

  const car = cars[index];

  return (
    <>
      <div
        className={
            `${
              (cars.length < 1)
                ? 'd-none'
                : 'd-flex w-100 justify-content-between position-fixed car-navs'
            }`
          }
      >
        <div className="span d-inline-block">
          {
            (index > 0 && loggedIn)
              && (
                <button
                  type="button"
                  className="btn"
                  onClick={handlePrevChange}
                >
                  <FontAwesomeIcon icon={faCaretLeft} />
                </button>
              )
            }
        </div>
        <div className="span d-inline-block">
          {
              (index < cars.length - 1 && loggedIn)
              && (
                <button
                  type="button"
                  className="btn"
                  onClick={handleNextChange}
                >
                  <FontAwesomeIcon icon={faCaretRight} />
                </button>
              )
            }
        </div>
      </div>
      <div className="container remove-padding flex-column align-items-center d-flex justify-content-center">
        {
          (cars.length > 0 && loggedIn && car)
            ? <Car car={car} />
            : <AddTrackButton />
        }
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  index: state.filterReducer.index,
  cars: state.carsReducer.cars,
  loggedIn: state.userReducer.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  handleSetFilterAction: (index) => {
    dispatch(setFilterAction(index));
  },
});

Cars.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  index: PropTypes.number.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  handleSetFilterAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cars);

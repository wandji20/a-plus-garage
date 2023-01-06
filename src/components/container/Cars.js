import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Car from '../presentation/Car';
import AddTrackButton from '../presentation/AddTrackButton';
import setFilterAction from '../../redux/actions/setFilterAction';

const Cars = (props) => {
  const {
    cars, index, loggedIn,
  } = props;

  useEffect(() => {

  }, [cars]);

  const car = cars[index];

  return (
    <>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Cars);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CarDetails from '../presentation/CarDetails';
import AddTrackButton from '../presentation/AddTrackButton';

const Cars = (props) => {
  const { cars, loggedIn } = props;
  const carIds = cars.map((car) => (car.id));
  const carId = carIds[carIds.length - 1];

  return (
    <div className="container d-flex justify-content-center align-items-center ">
      {
        (carId && loggedIn)
          ? <CarDetails carId={carId} />
          : <AddTrackButton />
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.userReducer.loggedIn,
  cars: state.userReducer.cars,
});

Cars.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.any).isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Cars);

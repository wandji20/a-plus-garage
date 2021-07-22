import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CarDetails from '../presentation/CarDetails';
import AddTrackButton from '../presentation/AddTrackButton';

const Cars = (props) => {
  const { cars, loggedIn } = props;
  const carIds = cars.map((car) => (car.id));
  const carId = carIds[carIds.length - 1];
  // const carId = carIds[];
  const [id, setId] = useState(carId);
  useEffect(() => {
    setId(carId);
    // console.log(carIds);
    // console.log(carId);
  }, [cars]);

  return (
    <>
      {
        (carId && loggedIn)
          ? <CarDetails carId={id} />
          : <AddTrackButton />
      }
    </>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.userReducer.loggedIn,
  cars: state.userReducer.cars,
});

Cars.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.any),
  loggedIn: PropTypes.bool.isRequired,
};

Cars.defaultProps = {
  cars: [],
};

export default connect(mapStateToProps)(Cars);

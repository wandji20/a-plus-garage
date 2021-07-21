import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CarDetails from '../presentation/CarDetails';
import AddTrackButton from '../presentation/AddTrackButton';

const Cars = (props) => {
  const { cars, loggedIn } = props;
  const car = cars[cars.length - 1];
  console.log(car);

  return (
    <div className="container d-flex justify-content-center align-items-center ">
      {
        (car && loggedIn)
          ? <CarDetails car={car} />
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

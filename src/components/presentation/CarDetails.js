// /* eslint-disable */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
// import AddTrackButton from './AddTrackButton';
import 'react-circular-progressbar/dist/styles.css';
import getCarDetailsAction from '../../redux/actions/getCarDetailsAction';
// import computeDisplayDetails from '../../helpers/computeDisplayInfo';
// import Button from '../presentation/Button';
// import oil from '../../assets/car-oil.png';
// import oilFilter from '../../assets/oil-filter.png';
// import brake from '../../assets/brake.png';
// import wheel from '../../assets/car-wheel.png';
// import lights from '../../assets/car.png';
// import fuelPump from '../../assets/fuel-pump.png';

// const parts = [
//   { id: 1, name: 'Oil', url: oil },
//   { id: 2, name: 'Oil Filter', url: oilFilter },
//   { id: 3, name: 'Tires', url: wheel },
//   { id: 4, name: 'Rear Lights', url: lights },
//   { id: 5, name: 'Fuel Pump', url: fuelPump },
//   { id: 6, name: 'Brakes', url: brake },
// ];
// const style = {
//   position: 'absolute',
//   fontSize: '30px',
// };

const CarDetails = (props) => {
  const {
    car, handleGetCarDetails, loggedIn, carId,
  } = props;
  const {
    make, power, fuel,
  } = car;

  useEffect(() => {
    if (loggedIn) {
      handleGetCarDetails(carId);
    }
  }, [carId]);
  // const allPartsDetails = computeDisplayDetails(parts);
  // const { overall } = allPartsDetails;
  // console.log(overall);

  return (

    <div className="container d-flex justify-content-center align-items-center my-5">
      {
        car.parts
        && (
          <article className="d-flex flex-column justify-content-center align-items-center">
            <h3>
              <span>Make :</span>
              <span>
                {' '}
                {make}
              </span>
            </h3>
            <p>
              <span>Horse Power :</span>
              <span>
                {' '}
                {power}
              </span>
            </p>
            <p>
              <span>Average Weekly consumption per gallon :</span>
              <span>
                {' '}
                {fuel}
              </span>
            </p>
            <figure className="col-6">
              <CircularProgressbar
                value={0}
                text={`${0}%`}
              />
            </figure>
            <h3>
              <span>{}</span>
              <span>
                {' '}
                Working Condition
              </span>
            </h3>
          </article>
        )
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.userReducer.loggedIn,
  car: state.carReducer.car,
});

const mapDispatchToProps = (dispatch) => ({
  handleGetCarDetails: (carId) => {
    dispatch(getCarDetailsAction(carId));
  },
});

CarDetails.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  car: PropTypes.objectOf(PropTypes.any).isRequired,
  handleGetCarDetails: PropTypes.func.isRequired,
  carId: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CarDetails);

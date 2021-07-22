import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
// import AddTrackButton from './AddTrackButton';
import 'react-circular-progressbar/dist/styles.css';
import getCarDetailsAction from '../../redux/actions/getCarDetailsAction';
import Part from './Part';
import computeDisplayDetails from '../../helpers/computeDisplayInfo';

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
  console.log(car);

  const allPartsInfo = computeDisplayDetails(car.parts || []);
  // if (car.parts) {
  // }

  return (
    <>
      <div
        className="container remove-padding d-flex flex-column justify-content-center align-items-center my-2 py-2"
      >
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
                  value={10}
                  text={`${10}%`}
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
      <div className="container-fluid d-flex-column align-items-start">
        {
          allPartsInfo
          && (
            allPartsInfo.map((part) => <Part part={part} key={part.id} />)
          )
        }
      </div>
    </>
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

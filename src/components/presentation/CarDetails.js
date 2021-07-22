import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import getCarDetailsAction from '../../redux/actions/getCarDetailsAction';
import Part from './Part';
import Button from './Button';
import computeDisplayDetails from '../../helpers/computeDisplayInfo';

const CarDetails = (props) => {
  const {

    car, handleGetCarDetails, loggedIn, carId,
  } = props;
  console.log(carId);
  const {
    make, power, fuel, id,
  } = car;

  const { allPartsInfo, overall } = computeDisplayDetails(car.parts || []);
  useEffect(() => {
    if (loggedIn) {
      handleGetCarDetails(carId);
    }
  }, [carId]);

  useEffect(() => {
  }, [overall]);
  // useEffect(() => {
  //   handleGetCarDetails(carId);
  // }, [carId]);

  return (
    <>
      <div
        className="container remove-padding d-flex flex-column justify-content-center align-items-center py-3 bg-light"
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
                  value={overall}
                  text={`${overall}%`}
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
      <div className="bg-light container-fluid d-flex-column align-items-start all-parts">
        {
          allPartsInfo
          && (
            allPartsInfo.map((part) => <Part part={part} key={part.id} />)
          )
        }
      </div>
      <div className="row py-2 justify-content-center">
        <Button id={id} />
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

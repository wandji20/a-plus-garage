import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CarDetails = () => {
  const car = {
    make: 'Lexus', horsePower: 8, fuelRate: 13, overall: 74,
  };
  const {
    make, horsePower, fuelRate, overall,
  } = car;
  const computeDetails = (overall) => {
    switch (overall) {
      case overall > 90: {
        return {
          status: 'Excellent',
          color: '',
        };
      }
      case overall > 70: {
        return {
          status: 'Good',
          color: '',
        };
      }
      case overall > 50: {
        return {
          status: 'Average',
          color: '',
        };
      }
      case overall > 30: {
        return {
          status: 'Poor',
          color: '',
        };
      }
      default:
        return {
          status: 'Very Poor',
          color: '',
        };
    }
  };
  const details = computeDetails(overall);
  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <article className="d-flex flex-column justify-content-center align-items-center">
        <h3>
          <span>6</span>
          <span> parts being tracked</span>
        </h3>
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
            {horsePower}
          </span>
        </p>
        <p>
          <span>Average Weekly consumption per gallon :</span>
          <span>
            {' '}
            {fuelRate}
          </span>
        </p>
        <figure className="col-6">
          <CircularProgressbar
            value={overall}
            text={overall}
          />
        </figure>
        <h3>
          <span>{details.status}</span>
          <span>
            {' '}
            Working Condition
          </span>
        </h3>
      </article>
    </div>
  );
};

export default CarDetails;

import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Part from './Part';
import Button from './Button';
import computeDisplayDetails from '../../helpers/computeDisplayInfo';

const Car = (props) => {
  const {
    car, parts,
  } = props;

  const {
    id, make, power, fuel,
  } = car;

  const carParts = parts.filter((part) => (part.car_id === id));

  useEffect(() => {

  }, [carParts]);

  const { allPartsInfo, overall, condition } = computeDisplayDetails(carParts);

  return (
    <>
      <div
        className="container remove-padding d-flex flex-column justify-content-center align-items-center py-3 bg-light"
      >
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
          <h3 className="d-flex flex-column align-items-center">
            <span>{condition.status}</span>
            <span>
              {' '}
              Working Condition
            </span>
          </h3>
        </article>
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
        {
        (carParts && carParts.length > 0)
        && <Button id={id} />
      }

      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  parts: state.carsReducer.parts,
});

Car.propTypes = {
  car: PropTypes.objectOf(PropTypes.any).isRequired,
  parts: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Car);

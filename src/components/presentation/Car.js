import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Part from './Part';
import Button from './Button';
import computeDisplayDetails from '../../helpers/computeDisplayInfo';

const Car = (props) => {
  const {
    car,
  } = props;

  const {
    id, make, power, fuel, parts,
  } = car;

  useEffect(() => {

  }, [parts]);

  const { allPartsInfo, overall } = computeDisplayDetails(parts);

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
          <h3>
            <span>{}</span>
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
        (parts && parts.length > 0)
        && <Button id={id} />
      }

      </div>
    </>
  );
};

Car.propTypes = {
  car: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Car;

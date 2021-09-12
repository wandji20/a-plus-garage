import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
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

  const { allPartsInfo, overall, condition } = computeDisplayDetails(carParts);
  const style = { color: condition.color };

  return (
    <div className="car-slide container remove-padding d-flex flex-column justify-content-center align-items-center bg-light">

      <article className="d-flex flex-column justify-content-center align-items-center">
        <h3>
          <span>Make :</span>
          <span>
            {' '}
            {make[0].toUpperCase() + make.slice(1, make.length)}
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
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: 'butt',
              textSize: '16px',
              pathTransitionDuration: 1,
              // pathTransition: 'none',
              pathColor: `${condition.color}`,
              textColor: `${condition.color}`,
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })}
          />
        </figure>
        <h3 className="d-flex flex-column align-items-center" style={style}>
          <span>{condition.status}</span>
          <span>
            {' '}
            Working Condition
          </span>
        </h3>
      </article>

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
        (id && carParts && carParts.length > 0)
        && <Button id={id} />
      }

      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  parts: state.carsReducer.parts,
});

Car.propTypes = {
  car: PropTypes.objectOf(PropTypes.any),
  parts: PropTypes.arrayOf(PropTypes.any).isRequired,
};

Car.defaultProps = {
  car: {},
};

export default connect(mapStateToProps)(Car);

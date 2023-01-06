import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Part from './Part';
import Button from './Button';
import computeDisplayDetails from '../../helpers/computeDisplayInfo';
import setFilterAction from '../../redux/actions/setFilterAction';

const Car = (props) => {
  const {
    car, parts, cars, index, handleSetFilterAction,
  } = props;

  const {
    id, make, power, fuel,
  } = car;

  const carParts = parts.filter((part) => (part.car_id === id));

  const { allPartsInfo, overall, condition } = computeDisplayDetails(carParts);
  const style = { color: condition.color };

  const handleNextChange = () => {
    if (index < cars.length - 1) {
      const newIndex = index + 1;
      handleSetFilterAction(newIndex);
    }
  };

  const handlePrevChange = () => {
    if (index > 0) {
      const newIndex = index - 1;
      handleSetFilterAction(newIndex);
    }
  };

  return (
    <div
      className="car-slide container remove-padding d-flex flex-column justify-content-center align-items-center bg-light pt-4"
      style={{ maxWidth: '600px', position: 'relative' }}
    >
      <div
        className={
          `${
            (cars.length < 1)
              ? 'd-none'
              : 'd-flex w-100 justify-content-between position-fixed car-navs'
          }`
        }
        style={{ maxWidth: '600px' }}
      >
        <div className="span d-inline-block">
          {
            index > 0 && (
            <button
              type="button"
              className="btn"
              onClick={handlePrevChange}
            >
              <FontAwesomeIcon icon={faCaretLeft} />
            </button>
            )
            }
        </div>
        <div className="span d-inline-block">
          {
              index < cars.length - 1 && (
                <button
                  type="button"
                  className="btn"
                  onClick={handleNextChange}
                >
                  <FontAwesomeIcon icon={faCaretRight} />
                </button>
              )
            }
        </div>
      </div>

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
  index: state.filterReducer.index,
  cars: state.carsReducer.cars,
});

const mapDispatchToProps = (dispatch) => ({
  handleSetFilterAction: (index) => {
    dispatch(setFilterAction(index));
  },
});

Car.propTypes = {
  car: PropTypes.objectOf(PropTypes.any),
  parts: PropTypes.arrayOf(PropTypes.any).isRequired,
  cars: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  index: PropTypes.number.isRequired,
  handleSetFilterAction: PropTypes.func.isRequired,
};

Car.defaultProps = {
  car: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Car);

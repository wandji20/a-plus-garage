import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getPartsData from '../../helpers/carFormHelper';
import { postCar } from '../../redux/actions/carsAction';
import LogInForm from './LogInForm';

const CarForm = (props) => {
  const {
    handlePostCar, loggedIn, error, history,
  } = props;

  const rate1 = useRef(null);
  const rate2 = useRef(null);
  const rate3 = useRef(null);
  const rate4 = useRef(null);
  const rate5 = useRef(null);
  const rate6 = useRef(null);
  const power1 = useRef(null);
  const power2 = useRef(null);
  const power3 = useRef(null);

  const [make, setMake] = useState('');
  const [fuelRate, setFuelRate] = useState(0);
  const [horsePower, setHorsePower] = useState(0);

  const handleMakeChange = (e) => {
    setMake(e.target.value);
  };

  const handleFuelRateChange = (e) => {
    setFuelRate(e.target.value);
  };

  const handleHorsePowerChange = (e) => {
    setHorsePower(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = { make, fuelRate, horsePower };
    const carDetails = getPartsData(data);
    setHorsePower(0);
    setMake('');
    setFuelRate(0);
    const radioButtons = [rate1, rate2, rate3, rate4, power1, power2, power3];
    radioButtons.forEach((button) => {
      const newButton = button;
      newButton.current.checked = false;
    });

    handlePostCar(carDetails, history);
  };

  const form = (
    <form
      className="d-flex container remove-padding flex-column align-items-start col-sm-8 col-md-6 px-3"
      onSubmit={handleFormSubmit}
    >
      <div className="form-group my-3">
        <label htmlFor="make">
          Make
          <input
            type="text"
            id="make"
            value={make}
            className="form-control"
            placeholder="...make"
            onChange={handleMakeChange}
            required
          />
        </label>
      </div>
      <fieldset
        className="form-group my-3 container remove-padding d-flex flex-wrap"
        onChange={handleFuelRateChange}
      >
        <p className="col-12">Weekly fuel consumption (in gallons)</p>
        <div className="form-check col-6 col-md-4">
          <label className="form-check-label" htmlFor="rate1">
            <input
              className="form-check-input"
              type="radio"
              value={3}
              id="rate1"
              ref={rate1}
              required
              name="fuel-rate"
            />
            1 - 5
          </label>
        </div>
        <div className="form-check col-6 col-md-4">
          <label className="form-check-label" htmlFor="rate2">
            <input
              className="form-check-input"
              type="radio"
              value={8}
              id="rate2"
              ref={rate2}
              name="fuel-rate"
            />
            6 - 10
          </label>
        </div>
        <div className="form-check col-6 col-md-4">
          <label className="form-check-label" htmlFor="rate3">
            <input
              className="form-check-input"
              type="radio"
              value={13}
              id="rate3"
              ref={rate3}
              name="fuel-rate"
            />
            11 - 15
          </label>
        </div>
        <div className="form-check col-6 col-md-4">
          <label className="form-check-label" htmlFor="rate4">
            <input
              className="form-check-input"
              type="radio"
              value={18}
              id="rate4"
              ref={rate4}
              name="fuel-rate"
            />
            16 - 20
          </label>
        </div>
        <div className="form-check col-6 col-md-4">
          <label className="form-check-label" htmlFor="rate5">
            <input
              className="form-check-input"
              type="radio"
              value={25}
              id="rate5"
              ref={rate5}
              name="fuel-rate"
            />
            20 - 30
          </label>
        </div>
        <div className="form-check col-6 col-md-4">
          <label className="form-check-label" htmlFor="rate6">
            <input
              className="form-check-input"
              type="radio"
              value={40}
              id="rate6"
              ref={rate6}
              required
              name="fuel-rate"
            />
            Above 30
          </label>
        </div>
      </fieldset>

      <fieldset
        className="form-group my-3 container remove-padding d-flex flex-wrap"
        onChange={handleHorsePowerChange}
      >
        <p className="col-12">Engine Horse Power</p>
        <div className="form-check col-6 col-md-4 text-start">
          <label className="form-check-label" htmlFor="power1">
            <input
              className="form-check-input"
              type="radio"
              value={3}
              id="power1"
              required
              ref={power1}
              name="horse-power"
            />
            1 - 5
          </label>
        </div>
        <div className="form-check col-6 col-md-4 text-start">
          <label className="form-check-label" htmlFor="power2">
            <input
              className="form-check-input"
              type="radio"
              value={7}
              id="power2"
              ref={power2}
              name="horse-power"
            />
            6 - 8
          </label>
        </div>
        <div className="form-check col-6 col-md-4 text-start">
          <label className="form-check-label" htmlFor="power3">
            <input
              className="form-check-input"
              type="radio"
              value={10}
              id="power3"
              ref={power3}
              name="horse-power"
            />
            Above 8
          </label>
        </div>
      </fieldset>

      <button type="submit" className="btn btn-info mb-2">Track Car</button>
    </form>
  );

  return (
    <div className="container d-flex justify-content-center align-items-center">
      {
        loggedIn
          ? form
          : <LogInForm />
      }
      <p className="row justify-content-center">
        {
          error !== ''
          && <span className="d-block m-auto">{error}</span>
        }
      </p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handlePostCar: (data, history) => {
    dispatch(postCar(data, history));
  },
});

const mapStateToProps = (state) => ({
  loggedIn: state.userReducer.loggedIn,
  error: state.carsReducer.error,
});

CarForm.propTypes = {
  error: PropTypes.string.isRequired,
  handlePostCar: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  history: PropTypes.objectOf(PropTypes.any),
};

CarForm.defaultProps = {
  history: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(CarForm);

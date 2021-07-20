import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import getPartsData from '../../helpers/carFormHelper';

const CarForm = (props) => {
  const { history } = props;
  console.log(history);
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
    console.log(carDetails);
    setHorsePower(0);
    setMake('');
    setFuelRate(0);
    props.history.push('/details');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <form
        className="d-flex flex-column align-items-start col-sm-8 col-md-6 px-3"
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
          {/* {
            (!response.success && response.errors && response.errors.name)

             && <FormError column="User name" errors={response.errors.name} />
          } */}
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
                required
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
                required
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
                required
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
                required
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
                id="power1"
                required
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
                required
                name="horse-power"
              />
              Above 8
            </label>
          </div>
        </fieldset>

        <button type="submit" className="btn btn-info mb-2">Track Car</button>
      </form>
    </div>
  );
};

CarForm.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(CarForm);

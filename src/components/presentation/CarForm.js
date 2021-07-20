import React, { useState, useEffect } from 'react';

const CarForm = () => {
  const [make, setMake] = useState('');
  const [fuelRate, setFuelRate] = useState(0);
  const [horsePower, setHorsePower] = useState(0);

  const handleMakeChange = (e) => {
    setMake(e.target.value);
  };

  useEffect(() => {

  });

  const handleFuelRateChange = (e) => {
    setFuelRate(e.target.value);
  };

  const handleHorsePowerChange = (e) => {
    setHorsePower(e.target.value);
  };

  const handleFormSubmit = () => {
    const data = { make, fuelRate, horsePower };
    console.log(data);
    setHorsePower(0);
    setMake(0);
    setFuelRate(0);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <form
        className="d-flex flex-column align-items-start col-sm-8 col-md-6"
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
            />
          </label>
          {/* {
            (!response.success && response.errors && response.errors.name)

             && <FormError column="User name" errors={response.errors.name} />
          } */}
        </div>
        <div
          className="form-group d-flex w-100 my-3"
          onChange={handleFuelRateChange}
        >
          <div className="form-check">
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
          <div className="form-check">
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
          <div className="form-check">
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
          {/* <div className="form-check">
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
          <div className="form-check">
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
          <div className="form-check">
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
          </div> */}
        </div>

        <div className="form-group" onChange={handleHorsePowerChange}>
          <div className="form-check">
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
          <div className="form-check">
            <label className="form-check-label" htmlFor="power2">
              <input
                className="form-check-input"
                type="radio"
                value={8}
                id="power1"
                required
                name="horse-power"
              />
              6 - 10
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mb-2">Sign Up</button>
      </form>
    </div>
  );
};

export default CarForm;

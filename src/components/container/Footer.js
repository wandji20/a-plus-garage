import React from 'react';

const Footer = () => (
  <footer className=" d-flex flex-column justify-content-center container remove-padding footer bg-info">
    <div className="row align-items-center">
      <div className="col-3 d-flex justify-content-center flex-column align-items-center">
        <span>
          +
        </span>
        <span>
          Car
        </span>
      </div>
      <div className="col-6 d-flex justify-content-between align-items-center">
        <span className="w-50">
          progress bar
        </span>
        <span className="w-50">
          other details
        </span>
      </div>
      <div className="col-3">
        something
      </div>
    </div>
  </footer>
);

export default Footer;

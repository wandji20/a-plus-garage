import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import Button from '../presentation/Button';
import 'react-circular-progressbar/dist/styles.css';

const Footer = () => {
  const percentage = 30;
  return (
    <footer className=" d-flex justify-content-center align-items-center container remove-padding footer">
      <div
        className="w-25 d-flex justify-content-center flex-column align-items-center"
      >
        <Button />
        <span className="d-block">
          Add Car
        </span>
      </div>
      <div className="w-50 d-flex justify-content-between align-items-center">
        <div className="w-50 d-flex flex-column justify-content-around align-items-center">
          <div id="circular">
            <CircularProgressbar
              value={percentage}
            />
          </div>
        </div>
        <div className="w-50 d-flex flex-column justify-content-around align-items-start">
          <span className="">low</span>
          <span className="">
            {percentage}
            {' '}
            %
          </span>
        </div>

      </div>
      <div className="w-25 d-flex justify-content-center align-self-center">
        <span className="m-auto d-inline-block fs-1">
          <FontAwesomeIcon icon={faEllipsisH} />
        </span>
      </div>
    </footer>
  );
};

export default Footer;

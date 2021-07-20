import React from 'react';
import { Link } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import Button from '../presentation/Button';
import 'react-circular-progressbar/dist/styles.css';

const Footer = () => {
  const percentage = 30;
  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    // display: 'inline-block',
    width: '100%',
    margin: 'auto',
  };
  return (
    <footer className=" d-flex justify-content-center align-items-center container remove-padding footer">

      <div
        className="w-25 d-flex justify-content-center flex-column align-items-center"
      >
        <Link to="/new_car" style={linkStyle}>
          <div className="">
            <Button />
            <span className="d-block">
              Add Car
            </span>
          </div>
        </Link>
      </div>
      <div className="w-50">
        <Link to="/details" style={linkStyle}>

          <div className="d-flex justify-content-between align-items-center">
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
        </Link>
      </div>
      <div className="w-25 d-flex justify-content-center align-self-center">
        <Link to="/about" style={linkStyle}>
          <div className="">
            <span className="m-auto d-inline-block fs-1">
              <FontAwesomeIcon icon={faEllipsisH} />
            </span>
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

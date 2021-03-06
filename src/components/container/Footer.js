import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faCar, faPlus } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    display: 'inline-block',
    width: '100%',
    height: '100%',
    margin: 'auto',
  };

  return (
    <footer className=" d-flex justify-content-center align-items-center container remove-padding footer">

      <div
        className="w-25 "
      >
        <NavLink
          exact
          to="/new_car"
          style={linkStyle}
          activeClassName="current"
        >
          <div className="d-flex justify-content-around h-100 flex-column align-items-center">
            <span className="d-block">
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <span className="d-block">
              Add Car
            </span>
          </div>
        </NavLink>
      </div>
      <div className="w-50">

        <NavLink exact to="/" style={linkStyle} activeClassName="current">
          <div className="d-flex justify-content-between align-items-center h-100">
            <div className="w-50 d-flex flex-column justify-content-around align-items-center">
              <FontAwesomeIcon icon={faCar} />
            </div>
            <div className="w-50 d-flex flex-column justify-content-around align-items-start">
              All Cars
            </div>
          </div>

        </NavLink>
      </div>
      <div className="w-25 ">
        <NavLink exact to="/about" style={linkStyle} activeClassName="current">
          <div className="d-flex justify-content-center align-self-center h-100">
            <span className="m-auto d-inline-block fs-1">
              <FontAwesomeIcon icon={faEllipsisH} />
            </span>
          </div>
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;

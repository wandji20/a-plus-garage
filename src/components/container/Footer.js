import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faCar } from '@fortawesome/free-solid-svg-icons';
import Button from '../presentation/Button';

const Footer = (props) => {
  const { loggedIn } = props;
  console.log(loggedIn);
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
          to="/new_car"
          style={linkStyle}
          activeClassName="current"
        >
          <div className="d-flex justify-content-center flex-column align-items-center">
            <Button />
            <span className="d-block">
              Add Car
            </span>
          </div>
        </NavLink>
      </div>
      <div className="w-50">

        <NavLink to="/cars" style={linkStyle} activeClassName="current">
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
        <NavLink to="/about" style={linkStyle} activeClassName="current">
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

const mapStateToProps = (state) => ({
  loggedIn: state.userReducer.loggedIn,
});

Footer.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Footer);

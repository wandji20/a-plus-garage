import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import Button from '../presentation/Button';
import 'react-circular-progressbar/dist/styles.css';

const Footer = (props) => {
  const { loggedIn } = props;
  const percentage = 30;
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

        <NavLink to="/details" style={linkStyle} activeClassName="current">
          {
            loggedIn
              ? (
                <div className="d-flex justify-content-between align-items-center h-100">
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
              )
              : <div className="d-flex justify-content-between align-items-center h-100" />

          }
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
  // car: state.carReducer.car,
});

Footer.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  // car: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Footer);

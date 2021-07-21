import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';

const Nav = (props) => {
  const { loggedIn } = props;
  console.log(loggedIn);
  const [display, setDisplay] = useState(false);

  const handleNavOptions = () => {
    setDisplay(!display);
  };

  const removeNavOptions = () => {
    setDisplay(false);
  };

  const icon = !display
    ? <FontAwesomeIcon icon={faCaretDown} />
    : <FontAwesomeIcon icon={faCaretUp} />;

  return (
    <header className="container d-flex flex-column justify-content-center bg-info remove-padding header">
      <nav className="nav justify-content-between mx-2">
        <div
          aria-hidden="true"
          className=""
          onClick={removeNavOptions}
          onKeyDown={removeNavOptions}
        >
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="">
          <button
            type="button"
            className="btn"
            onClick={handleNavOptions}
          >
            {icon}
          </button>
        </div>
      </nav>
      {
        display && (
        <div className="nav-controls bg-light position-absolute d-flex flex-column align-items-center">
          <button type="button" className="btn" onClick={handleNavOptions}>
            <Link to="/log_in">
              Sign In
            </Link>
          </button>
          <button type="button" className="btn" onClick={handleNavOptions}>
            <Link to="/sign_up">
              Sign Up
            </Link>
          </button>
          <button type="button" className="btn" onClick={handleNavOptions}>
            <Link to="/logout">
              Sign Out
            </Link>
          </button>
        </div>
        )
      }
    </header>
  );
};

Nav.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loggedIn: state.userReducer.loggedIn,
});

export default connect(mapStateToProps)(Nav);

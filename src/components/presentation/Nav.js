import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';
import { logOutUser } from '../../redux/actions/userAction';
import { getCarsRequest } from '../../redux/actions/carsAction';
import setFilterAction from '../../redux/actions/setFilterAction';

const Nav = (props) => {
  const {
    logOutUser, loggedIn, handleGetCarsRequest, handleSetIndex,
  } = props;

  const [display, setDisplay] = useState(false);

  const handleNavOptions = () => {
    setDisplay(!display);
  };

  const removeNavOptions = () => {
    setDisplay(false);
  };

  const handleLogOutAction = () => {
    handleNavOptions();
    handleSetIndex(0);
    handleGetCarsRequest({ cars: [], parts: [] });
    logOutUser();
  };

  const icon = !display
    ? <FontAwesomeIcon icon={faCaretDown} />
    : <FontAwesomeIcon icon={faCaretUp} />;

  const navLinksDisplay = () => {
    if (loggedIn && display) {
      return (
        <button type="button" className="btn" onClick={handleLogOutAction}>
          <Link to="/">
            Sign Out
          </Link>
        </button>
      );
    } if (display && !loggedIn) {
      return (
        <>
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
        </>
      );
    }
    return null;
  };

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

      <div className="nav-controls bg-light position-absolute d-flex flex-column align-items-center">
        {
            navLinksDisplay()
          }
      </div>

    </header>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.userReducer.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  logOutUser: () => {
    dispatch(logOutUser());
  },

  handleGetCarsRequest: (response) => {
    dispatch(getCarsRequest(response));
  },

  handleSetIndex: (index) => {
    dispatch(setFilterAction(index));
  },
});

Nav.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logOutUser: PropTypes.func.isRequired,
  handleGetCarsRequest: PropTypes.func.isRequired,
  handleSetIndex: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

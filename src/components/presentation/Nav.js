import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';
import logOutUser from '../../redux/actions/logOutAction';

const Nav = (props) => {
  const { logOutUser } = props;

  const [display, setDisplay] = useState(false);

  const handleNavOptions = () => {
    setDisplay(!display);
  };

  const removeNavOptions = () => {
    setDisplay(false);
  };

  const handleLogOutAction = () => {
    handleNavOptions();
    logOutUser();
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
          <Link to="/home">
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
          <button type="button" className="btn" onClick={handleLogOutAction}>
            <Link to="/">
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
  // loggedIn: PropTypes.bool.isRequired,
  logOutUser: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => ({
//   loggedIn: state.userReducer.loggedIn,
// });

const mapDispatchToProps = (dispatch) => ({
  logOutUser: () => {
    dispatch(logOutUser());
  },
});

export default connect(null, mapDispatchToProps)(Nav);

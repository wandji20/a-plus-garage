import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Nav = (props) => {
  const { loggedIn } = props;
  const [display, setDisplay] = useState(false);
  console.log(loggedIn);

  const handleNavOptions = () => {
    setDisplay(!display);
  };

  return (
    <header className="container d-flex flex-column justify-content-center bg-info remove-padding header">
      <nav className="nav justify-content-between mx-2">
        <div className="">
          <Link to="/">
            A+ Automobile
          </Link>
        </div>
        <div className="">
          {
            loggedIn
              ? 'user name'
              : (
                <button
                  style={{ border: '1px solid black' }}
                  type="button"
                  className="btn"
                  onClick={handleNavOptions}
                >
                  icon
                </button>
              )

          }

        </div>
      </nav>
      {
        display && (
        <div className="nav-controls bg-light position-absolute d-flex flex-column align-items-center">
          <button type="button" className="btn btn">
            <Link to="/log_in">
              Sign In
            </Link>
          </button>
          <button type="button" className="btn">
            <Link to="/sign_up">
              Sign Up
            </Link>
          </button>
          <button type="button" className="btn">
            <Link to="/logout">
              Sign Out
            </Link>
          </button>
          {/* <button type="button" className="btn">
            Exit
          </button> */}
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

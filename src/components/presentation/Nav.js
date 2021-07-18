/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Nav = (props) => {
  const { response  } = props;
  // console.log(response);
  return (
    <header className="container bg-info">
      <nav className="nav d-flex justify-content-between">
        <div className="">
          <Link to='/'>
            A+ Automobile
          </Link>
        </div>
        <div className="w-50 d-flex justify-content-between">
          <Link to='/log_in'>
            log in
          </Link>
          <Link to='/sign_up'>
            sign up
          </Link>
          <Link to='/log_out'>
            log out
          </Link>
        </div>
      </nav>
    </header>
  );
};

Nav.propTypes = {
  response: PropTypes.object,
};

Nav.defaultProps = {
  response: {},
};

const mapStateToProps = (state) => ({
  data: state.userReducer.response
});

export default connect(mapStateToProps)(Nav);

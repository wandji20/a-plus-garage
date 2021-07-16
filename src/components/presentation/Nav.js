/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Nav = (props) => {
  const { response  } = props;
  // console.log(response);
  return (
    <header className="container bg-info">
      <nav className="nav d-flex justify-content-between">
        <div className="">
          A+ Automobile
        </div>
        <div className="">
          user icon
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
  data: state.signUpUser.response
});

export default connect(mapStateToProps)(Nav);

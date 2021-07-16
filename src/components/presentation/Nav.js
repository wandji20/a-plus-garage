import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Nav = (props) => {
  const { name } = props;
  console.log(name);
  return (
    <header className="container-fluid">
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
  name: PropTypes.string,
};

Nav.defaultProps = {
  name: '',
};

const mapStateToProps = (state) => ({
  name: state.signUpUser.user.name,
});

export default connect(mapStateToProps)(Nav);

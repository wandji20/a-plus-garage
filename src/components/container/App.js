import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Nav from '../presentation/Nav';
import Navigations from './Navigations';
import Footer from './Footer';
import { getToken } from '../../helpers/session';
import { logInUserSession } from '../../redux/actions/userAction';
import { getCars } from '../../redux/actions/carsAction';

function App(props) {
  const { loggedIn, handleGetCars, handleLogInSession } = props;

  const token = getToken();
  useEffect(() => {
    if (token.auth_token && !loggedIn) {
      handleLogInSession();
    }
    if (loggedIn && token.auth_token) {
      handleGetCars(token);
    }
  }, [loggedIn]);
  return (
    <Router>
      <Nav />
      <section id="content" className="container remove-padding">
        <Navigations />
      </section>
      <Footer />
    </Router>
  );
}

const mapStateToProps = (state) => ({
  loggedIn: state.userReducer.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  handleGetCars: () => {
    dispatch(getCars());
  },
  handleLogInSession: () => {
    dispatch(logInUserSession());
  },
});

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  handleGetCars: PropTypes.func.isRequired,
  handleLogInSession: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

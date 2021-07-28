// /* eslint-disable */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTrackButton from '../presentation/AddTrackButton';
import Cars from './Cars';
import getCarsAction from '../../redux/actions/getCarsAction';
import { getToken } from '../../helpers/session';
import loginUserSession from '../../redux/actions/loginUsersession';

const Home = (props) => {
  const { loggedIn, fetchUserInfo, loginSession } = props;
  const token = getToken('TOKEN');

  useEffect(() => {
    if (token.auth_token) {
      loginSession();
    }
    if (loggedIn && token.auth_token) {
      fetchUserInfo(token);
    }
  }, [loggedIn]);

  return (
    <div className="container remove-padding d-flex justify-content-center flex-wrap">
      {
        loggedIn
          ? <Cars />
          : <AddTrackButton />
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.userReducer.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserInfo: (data) => {
    dispatch(getCarsAction(data));
  },
  loginSession: () => {
    dispatch(loginUserSession());
  },
});

Home.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  fetchUserInfo: PropTypes.func.isRequired,
  loginSession: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

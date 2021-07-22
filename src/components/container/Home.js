import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTrackButton from '../presentation/AddTrackButton';
import Cars from './Cars';
import getLogInDetails from '../../redux/actions/logInAction';
import { getToken } from '../../helpers/session';

const Home = (props) => {
  const {
    loggedIn, fetchUserInfo,
  } = props;

  console.log(loggedIn);

  useEffect(() => {
    const token = getToken('TOKEN');
    if (!loggedIn && token !== '') {
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
    dispatch(getLogInDetails(data));
  },
});

Home.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  fetchUserInfo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

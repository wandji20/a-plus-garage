import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTrackButton from '../presentation/AddTrackButton';
import Cars from './Cars';
import getLogInDetails from '../../redux/actions/logInAction';
import { getToken } from '../../helpers/session';

const Home = (props) => {
  const {
    loggedIn, fetchUserInfo, cars,
  } = props;

  const carIds = cars.map((car) => car.id);

  useEffect(() => {
    const token = getToken('TOKEN');
    if (!loggedIn && token !== '') {
      fetchUserInfo(token);
    }
  }, [loggedIn]);

  useEffect(() => {
  }, [cars]);

  return (
    <div className="container remove-padding d-flex justify-content-center flex-wrap">
      {
        (loggedIn && cars.length > 0)
          ? <Cars carIds={carIds} />
          : <AddTrackButton />
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.userReducer.loggedIn,
  cars: state.userReducer.cars,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserInfo: (data) => {
    dispatch(getLogInDetails(data));
  },
});

Home.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  fetchUserInfo: PropTypes.func.isRequired,
  cars: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const AddTrackButton = (props) => {
  const { loggedIn } = props;
  const style = {
    display: 'block',
    marginTop: '200px',
  };
  const redirect = loggedIn ? '/new_car' : '/log_in';
  return (
    <Link to={redirect} style={style}>
      <button type="button" className="btn btn-info">
        Track Car
      </button>
    </Link>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.userReducer.loggedIn,
});

AddTrackButton.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(AddTrackButton);

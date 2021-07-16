import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import signUpUserAction from '../../redux/actions/signUpAction';

const SignUpForm = (props) => {
  const { handleSignUpUser } = props;

  console.log(props);

  const handleFormSubmit = (e) => {
    const data = {};
    e.preventDefault();
    handleSignUpUser(data);
  };

  return (
    <section className="container d-flex justify-content-center align-items-center">
      <form
        className=" d-flex flex-column align-items-center col-sm-8 col-md-6"
        onSubmit={handleFormSubmit}
      >
        <div className="form-group my-3">
          <label htmlFor="name">
            User Name
            <input type="text" id="name" className="form-control" placeholder="...name" />
          </label>
        </div>
        <div className="form-group my-3">
          <label htmlFor="formGroupExampleInput2">
            UserID
            <input type="text" className="form-control" placeholder="@username" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary mb-2">Sign Up</button>
      </form>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleSignUpUser: (data) => {
    dispatch(signUpUserAction(data));
  },
});

SignUpForm.propTypes = {
  handleSignUpUser: PropTypes.func,
};

SignUpForm.defaultProps = {
  handleSignUpUser: () => {},
};

export default connect(null, mapDispatchToProps)(SignUpForm);

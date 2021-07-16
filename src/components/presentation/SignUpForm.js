import React from 'react';

const SignUpForm = () => (
  <div className="row d-flex justify-content-center">
    <form className="col-sm-8 col-md-6">
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
  </div>
);

export default SignUpForm;

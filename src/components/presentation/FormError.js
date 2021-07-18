import React from 'react';
import PropTypes from 'prop-types';

export const FormError = ({ column, errors }) => (

  errors.length > 0 && column !== ''
        && (
        <ul className="text-danger">
          {
            errors.map((error) => (
              <li key={error}>
                {`${column} ${error}`}
              </li>
            ))
          }
        </ul>
        )

);

FormError.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
  column: PropTypes.string,
};

FormError.defaultProps = {
  errors: [],
  column: '',
};

export default FormError;

// /* eslint-disable */
import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
// import AddTrackButton from './AddTrackButton';
import 'react-circular-progressbar/dist/styles.css';
// import computeDisplayDetails from '../../helpers/computeDisplayInfo';

const CarDetails = (props) => {
  const { car } = props;
  const {
    make, power, fuel,
  } = car;
  // const allPartsDetails = computeDisplayDetails(parts);
  // const { overall } = allPartsDetails;
  // console.log(overall);

  return (

    <div className="container d-flex justify-content-center align-items-center my-5">

      <article className="d-flex flex-column justify-content-center align-items-center">
        <h3>
          <span>Make :</span>
          <span>
            {' '}
            {make}
          </span>
        </h3>
        <p>
          <span>Horse Power :</span>
          <span>
            {' '}
            {power}
          </span>
        </p>
        <p>
          <span>Average Weekly consumption per gallon :</span>
          <span>
            {' '}
            {fuel}
          </span>
        </p>
        <figure className="col-6">
          <CircularProgressbar
            value={0}
            text={`${0}%`}
          />
        </figure>
        <h3>
          <span>{}</span>
          <span>
            {' '}
            Working Condition
          </span>
        </h3>
      </article>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   car: state.carReducer.car,
// });

CarDetails.propTypes = {
  car: PropTypes.objectOf(PropTypes.any),
};

CarDetails.defaultProps = {
  car: {},
};
// export default connect(mapStateToProps)(CarDetails);
export default CarDetails;

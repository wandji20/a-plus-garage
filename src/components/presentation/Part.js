import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import updatePartAction from '../../redux/actions/updatePartAction';

const Part = (props) => {
  const { part, handleUpdateAction } = props;
  // console.log(part);

  const handleUpdatePart = () => {
    const { id, count } = part;
    // console.log([id, count, handleUpdateAction]);
    handleUpdateAction(part.car_id, id, { count: count + 1 });
  };
  const { name, url, stats } = part;
  return (
    <article className="part my-3 align-items-center row bg-white mx-1 py-2 ">
      <figure className=" col-4 d-flex flex-column">
        <h3>
          {name}
        </h3>
        <img className="img" src={url} alt={part.name} />
      </figure>
      <div className="col-8 d-flex justify-content-between align-items-center">
        <div className="d-flex col-8 flex-column justify-content-center align-items-start">
          <h6>
            {stats.status}
            {/* {' '}
            Condition */}
          </h6>
          <p className="">
            <span className="d-block">
              {stats.daysLeft}
              {' '}
              days left!
            </span>
            <button
              type="submit"
              className="btn btn-info"
              onClick={handleUpdatePart}
            >
              Track
            </button>
          </p>

        </div>
        <div
          style={{ width: '64px', height: '64px' }}
          className="d-flex col-4 flex-column justify-content-end align-items-start"
        >
          <CircularProgressbar
            value={stats.percentage}
            text={`${stats.percentage}%`}
          />
        </div>
      </div>
    </article>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleUpdateAction: (carId, id, data) => {
    dispatch(updatePartAction(carId, id, data));
  },
});

Part.propTypes = {
  part: PropTypes.objectOf(PropTypes.any).isRequired,
  handleUpdateAction: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Part);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { updatePart } from '../../redux/actions/carsAction';

const Part = (props) => {
  const { part, handleUpdate } = props;
  const handleUpdatePart = () => {
    const { id, count } = part;
    handleUpdate(part.car_id, id, { count: count + 1 });
  };
  const { name, url, stats } = part;
  const style = { color: stats.color };

  return (
    <article className="part my-4 align-items-center row bg-white mx-1 py-2 ">
      <figure className=" col-4 d-flex flex-column m-auto">
        <h3>
          {name}
        </h3>
        <img className="img" src={url} alt={part.name} />
      </figure>
      <div className="col-8 d-flex justify-content-between align-items-center">
        <div className="d-flex col-8 flex-column justify-content-center align-items-start">
          <h6 style={style}>
            {stats.status}
          </h6>
          <p className="">
            {
              stats.months > 0
                && (
                <span className="d-inline-block">
                  {
                  `${stats.months} months  `
                }
                </span>
                )
            }
            {
              stats.days > 0
               && (
               <span className="d-inline-block mx-1">
                 {
                  `${stats.days} days `
                }
               </span>
               )
            }
            <span className="d-inline-block">
              left!
            </span>

          </p>
          <button
            type="submit"
            className="btn btn-info"
            onClick={handleUpdatePart}
          >
            Repair
          </button>

        </div>
        <div
          style={{ width: '64px', height: '64px' }}
          className="d-flex col-4 flex-column justify-content-end align-items-start"
        >
          <CircularProgressbar
            value={stats.percentage}
            text={`${stats.percentage}%`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: 'butt',
              textSize: '16px',
              pathTransitionDuration: 0.5,
              // pathTransition: 'none',
              pathColor: `${stats.color}`,
              textColor: `${stats.color}`,
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })}
          />
        </div>
      </div>
    </article>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleUpdate: (carId, id, data) => {
    dispatch(updatePart(carId, id, data));
  },
});

Part.propTypes = {
  part: PropTypes.objectOf(PropTypes.any).isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Part);

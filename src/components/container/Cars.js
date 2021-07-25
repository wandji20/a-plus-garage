import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import CarDetails from '../presentation/CarDetails';
import AddTrackButton from '../presentation/AddTrackButton';
import setFilterAction from '../../redux/actions/setFilterAction';

const Cars = (props) => {
  const {
    carIds, loggedIn, index, handleSetFilterAction,
  } = props;

  const handleNextIdChange = () => {
    if (index < carIds.length - 1) {
      const newIndex = index + 1;
      handleSetFilterAction(newIndex);
    }
  };

  const handlePrevIdChange = () => {
    if (index > 0) {
      const newIndex = index - 1;
      handleSetFilterAction(newIndex);
    }
  };

  const nextId = carIds[index + 1] || 0;
  const id = carIds[index];
  const prevId = carIds[index - 1] || 0;

  useEffect(() => {
  }, [carIds]);

  return (
    <>
      <div className="d-flex justify-content-between position-fixed car-navs">
        <div className="span d-inline-block">
          {
            index > 0 && prevId !== 0
              && (
                <button
                  type="button"
                  className="btn"
                  onClick={handlePrevIdChange}
                >
                  <FontAwesomeIcon icon={faCaretLeft} />
                </button>
              )
            }
        </div>
        <div className="span d-inline-block">
          {
              (index < carIds.length - 1)
              && (
                <button
                  type="button"
                  className="btn"
                  onClick={handleNextIdChange}
                >
                  <FontAwesomeIcon icon={faCaretRight} />
                </button>
              )
            }
        </div>
      </div>
      {
        (carIds.length > 0 && loggedIn)
          ? <CarDetails id={id} nextId={nextId} prevId={prevId} />
          : <AddTrackButton />
      }
    </>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.userReducer.loggedIn,
  index: state.filterReducer.index,
});

const mapDispatchToProps = (dispatch) => ({
  handleSetFilterAction: (index) => {
    dispatch(setFilterAction(index));
  },
});

Cars.propTypes = {
  carIds: PropTypes.arrayOf(PropTypes.number),
  loggedIn: PropTypes.bool.isRequired,
  handleSetFilterAction: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

Cars.defaultProps = {
  carIds: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Cars);

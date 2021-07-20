import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CarDetails from '../presentation/CarDetails';
import Button from '../presentation/Button';
import oil from '../../assets/car-oil.png';
import oilFilter from '../../assets/oil-filter.png';
import brake from '../../assets/brake.png';
import wheel from '../../assets/car-wheel.png';
import lights from '../../assets/car.png';
import fuelPump from '../../assets/fuel-pump.png';

const Home = (props) => {
  const { loggedIn, car } = props;

  const parts = [
    { id: 1, name: 'Oil', url: oil },
    { id: 2, name: 'Oil Filter', url: oilFilter },
    { id: 3, name: 'Tires', url: wheel },
    { id: 4, name: 'Rear Lights', url: lights },
    { id: 5, name: 'Fuel Pump', url: fuelPump },
    { id: 6, name: 'Brakes', url: brake },
  ];
  const style = {
    position: 'absolute',
    fontSize: '30px',
  };
  return (
    <div className="container-fluid d-flex justify-content-center flex-wrap">
      {
        (loggedIn && car.make)
          ? <CarDetails car={car} />
          : parts.map((part) => (
            <article
              key={part.id}
              className="article my-2 col-6 col-md-4 d-flex
                flex-column justify-content-center align-items-center"
            >
              <h5 className="">
                {part.name}
              </h5>
              <div className="d-flex justify-content-center align-items-center">
                <Button style={style} />
                <img style={{ borderRadius: '10px' }} src={part.url} alt={part.name} />
              </div>
            </article>
          ))
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.userReducer.loggedIn,
  car: state.carReducer.car,
});

Home.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  car: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Home);

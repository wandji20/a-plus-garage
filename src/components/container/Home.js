import React from 'react';
import oil from '../../assets/car-oil.png';
import oilFilter from '../../assets/oil-filter.png';
import brake from '../../assets/brake.png';
import wheel from '../../assets/car-wheel.png';
import lights from '../../assets/car.png';
import fuelPump from '../../assets/fuel-pump.png';

const Home = () => {
  const parts = [
    { id: 1, name: 'Oil', url: oil },
    { id: 2, name: 'Oil Filter', url: oilFilter },
    { id: 3, name: 'Tires', url: wheel },
    { id: 4, name: 'Rear Lights', url: lights },
    { id: 5, name: 'Fuel Pump', url: fuelPump },
    { id: 6, name: 'Brakes', url: brake },
  ];
  console.log(parts);
  return (
    <div className="container-fluid d-flex justify-content-center flex-wrap">
      {/* <div className="row justify-content-center align-items-center"> */}
      {
          parts.map((part) => (
            <article
              key={part.id}
              className="article my-2 col-6 col-md-4 d-flex flex-column justify-content-center align-items-center"
            >
              <h5 className="">
                {part.name}
              </h5>
              <div className="img">
                <img style={{ borderRadius: '10px' }} src={part.url} alt={part.name} />
              </div>
            </article>
          ))
        }
    </div>
  // </div>
  );
};

export default Home;

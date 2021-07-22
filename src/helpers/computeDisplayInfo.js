import oil from '../assets/car-oil.png';
import oilFilter from '../assets/oil-filter.png';
import brake from '../assets/brake.png';
import wheel from '../assets/car-wheel.png';
import lights from '../assets/car.png';
import fuelPump from '../assets/fuel-pump.png';

const partsURL = {
  Oil: oil,
  'Oil Filter': oilFilter,
  Tires: wheel,
  'Rear Lights': lights,
  'Fuel Pump': fuelPump,
  Brakes: brake,
};

const getPartDetails = (part) => {
  const { life } = part;
  const date2 = new Date();
  const date1 = new Date(part.updated_at);
  const days = Math.ceil((date2 - date1) / (1000 * 3600 * 24));
  const percentage = Math.ceil((days * 100) / life);

  switch (true) {
    case percentage > 90: {
      return {
        status: 'Excellent',
        color: '',
        percentage,
      };
    }
    case percentage > 70: {
      return {
        status: 'Good',
        color: '',
        percentage,
      };
    }
    case percentage > 50: {
      return {
        status: 'Average',
        color: '',
        percentage,
      };
    }
    case percentage > 30: {
      return {
        status: 'Poor',
        color: '',
        percentage,
      };
    }
    case (percentage > 0 && percentage <= 30): {
      return {
        status: 'Poor',
        color: '',
        percentage,
      };
    }
    default:
      return {
        status: 'Untracked',
        color: '',
        percentage,
      };
  }
};

const computeDisplayDetails = (parts) => {
  console.log(parts);
  const details = parts.map((part) => {
    const newPart = { ...part };
    newPart.url = partsURL[part.name];
    const stats = getPartDetails(part);
    newPart.stats = stats;
    return newPart;
  });
  return details;
};

export default computeDisplayDetails;

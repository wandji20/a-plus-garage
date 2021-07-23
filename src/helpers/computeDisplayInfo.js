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
  const daysPassed = Math.ceil((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
  const daysLeft = (life * 30) - daysPassed;
  const percentage = Math.round((daysLeft * 1000) / (life * 30)) / 10;

  switch (true) {
    case percentage > 95: {
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
  let overall = 0;
  const allPartsInfo = parts.map((part) => {
    const newPart = { ...part };
    newPart.url = partsURL[part.name];
    const stats = getPartDetails(part);
    newPart.stats = stats;
    overall += stats.percentage;
    return newPart;
  });
  overall = (Math.round((overall / 6) * 10)) / 10;
  return { allPartsInfo, overall };
};

export default computeDisplayDetails;

const processCarsResponse = (cars) => {
  const newCars = [];
  const newParts = [];
  cars.forEach((car) => {
    const {
      id, make, power, fuel, parts,
    } = car;
    const newCar = {
      id, make, power, fuel,
    };
    newCars.push(newCar);
    newParts.push(...parts);
  });

  return {
    cars: newCars,
    parts: newParts,
  };
};

export default processCarsResponse;

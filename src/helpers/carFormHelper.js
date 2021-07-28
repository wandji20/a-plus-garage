const getPartsData = (data) => {
  const { make, fuelRate, horsePower } = data;
  if (horsePower === 0 || fuelRate === 0) {
    return {};
  }
  const life = Math.ceil((6 * horsePower) / fuelRate);
  const parts = [
    {
      name: 'Oil',
      life,
      count: 1,
    },
    {
      name: 'Oil Filter',
      life: 2 * life,
      count: 1,
    },
    {
      name: 'Rear Lights',
      life: 1.5 * life,
      count: 1,
    },
    {
      name: 'Tires',
      life: 3 * life,
      count: 1,
    },
    {
      name: 'Fuel Pump',
      life: 9 * life,
      count: 1,
    },
    {
      name: 'Brakes',
      life: 3 * life,
      count: 1,
    },
  ];
  return {
    make,
    power: horsePower,
    fuel: fuelRate,
    parts_attributes: parts,
  };
};

export default getPartsData;

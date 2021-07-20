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
    },
    {
      name: 'Oil Filter',
      life: 2 * life,
    },
    {
      name: 'Rear Lights',
      life: 1.5 * life,
    },
    {
      name: 'Tires',
      life: 3 * life,
    },
    {
      name: 'Fuel Pump',
      life: 9 * life,
    },
    {
      name: 'Brakes',
      life: 3 * life,
    },
  ];
  return {
    make,
    power: horsePower,
    fuel: fuelRate,
    parts,
  };
};

export default getPartsData;

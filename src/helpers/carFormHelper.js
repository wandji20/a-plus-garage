const getPartsData = (data) => {
  const { make, fuelRate, horsePower } = data;
  if (horsePower === 0 || fuelRate === 0) {
    return {};
  }
  const life = Math.ceil((6 * horsePower) / fuelRate);
  const parts = [
    {
      oil: life,
    },
    {
      oilFilter: 2 * life,
    },
    {
      lights: 1.5 * life,
    },
    {
      tires: 3 * life,
    },
    {
      fuelPump: 9 * life,
    },
    {
      brakes: 3 * life,
    },
  ];
  return {
    make,
    horsePower,
    fuelRate,
    parts,
  };
};

export default getPartsData;

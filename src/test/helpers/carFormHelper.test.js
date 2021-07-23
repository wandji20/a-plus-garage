import getPartsData from '../../helpers/carFormHelper';


describe ("get Parts Date", ()=> {
  test ('Creates parts objects from car inputs', ()=> {
    const input = {
      make: 'Lexus', fuelRate: 8, horsePower: 6 }
    const response = getPartsData(input)
    expect(response.parts.length).toBe(6);
  })

  test ('returns empty object id fuel rate is 0', ()=> {
    const input = {
      make: 'Lexus', fuelRate: 0, horsePower: 6 }
    const response = getPartsData(input)
    expect(response).toEqual({});
  })

  test ('returns empty object id horse power is 0', ()=> {
    const input = {
      make: 'Lexus', fuelRate: 9, horsePower: 0 }
    const response = getPartsData(input)
    expect(response).toEqual({});
  })

})

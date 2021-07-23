import computeDisplayDetails from "../../helpers/computeDisplayInfo";

const parts = [
  {
    "id":4,"name":"Oil Filter","life":12,"car_id":3,"created_at":"2021-07-23T12:14:36.683Z","updated_at":"2021-07-23T12:14:36.683Z","count":1
  },
  {
    "id":5,"name":"Rear Lights","life":9,"car_id":3,"created_at":"2021-07-23T12:14:36.691Z","updated_at":"2021-07-23T12:14:36.691Z","count":1
  },
  {
    "id":6,"name":"Tires","life":18,"car_id":3,"created_at":"2021-07-23T12:14:36.704Z","updated_at":"2021-07-23T12:14:36.704Z","count":1
  },
  {
    "id":7,"name":"Fuel Pump","life":54,"car_id":3,"created_at":"2021-07-23T12:14:36.717Z","updated_at":"2021-07-23T12:14:36.717Z","count":1
  },
  {
    "id":8,"name":"Brakes","life":18,"car_id":3,"created_at":"2021-07-23T12:14:36.724Z","updated_at":"2021-07-23T12:14:36.724Z","count":1
  },
  {
    "id":3,"name":"Oil","life":6,"car_id":3,"created_at":"2021-07-23T12:14:36.673Z","updated_at":"2021-07-23T12:36:18.370Z","count":2
  }
]

describe ('Compute part details', ()=> {
  test('calculates overall metric for car', ()=>{
    const details = computeDisplayDetails(parts);
    expect(details.overall).toBeLessThanOrEqual(100);
    expect(details.overall).toBeGreaterThanOrEqual(0);
  })

  test('calculates metric for car parts', ()=>{
    const details = computeDisplayDetails(parts);
    expect(details.overall).toBeLessThanOrEqual(100);
    expect(details.allPartsInfo.length).toEqual(parts.length);
  })
})
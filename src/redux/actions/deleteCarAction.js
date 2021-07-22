import { DELETE_CAR } from '../constants';

const deleteCarAction = (id) => ({
  type: DELETE_CAR,
  payload: id,
});

export default deleteCarAction;

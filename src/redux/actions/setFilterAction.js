import { SET_FILTER_INDEX } from '../constants';

const setFilterAction = (index) => ({
  type: SET_FILTER_INDEX,
  payload: index,
});

export default setFilterAction;

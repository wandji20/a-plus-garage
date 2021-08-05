import { LOADING, LOADED } from "../constants";

const loadingAction = () => {
  return {
    type: LOADING,
  }
}

const loadedAction = () => {
  return {
    type: LOADED,
  }
}

export {loadedAction, loadingAction}
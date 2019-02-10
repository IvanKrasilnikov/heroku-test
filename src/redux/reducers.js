import { combineReducers } from "redux";
import { TOGGLE_FILTER, TOGGLE_MENU } from "./actions";

function filter(state = { show: false }, action) {
  switch (action.type) {
    case TOGGLE_FILTER:
      return {
        ...state,
        show: !state.show,
      };
    default:
      return state;
  }
}

function menu(state = { show: false }, action) {
  switch (action.type) {
  case TOGGLE_MENU:
    return {
      ...state,
      show: !state.show,
    };
  default:
    return state;
  }
}

const reducers = combineReducers({ filter, menu });

export default reducers;

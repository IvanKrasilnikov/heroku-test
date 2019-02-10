import { combineReducers } from "redux";
import { TOGGLE_FILTER, SHOW_MENU, HIDE_MENU } from "./actions";

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
  case SHOW_MENU:
    return {
      ...state,
      show: true,
    };
  case HIDE_MENU:
    return {
      ...state,
      show: false,
    };
  default:
    return state;
  }
}

const reducers = combineReducers({ filter, menu });

export default reducers;

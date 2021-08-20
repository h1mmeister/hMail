import { FETCH_USER } from "../actions/types";

// eslint-disable-next-line
export default function (state = null, action) {
  // state object initially starts off with undefined so providing an initial value of null
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;

    default:
      return state;
  }
}

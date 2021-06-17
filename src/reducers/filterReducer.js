import { FILTER_TODO } from "../actions/actions";

const filterReducer = (state = "all", action) => {
  switch (action.type) {
    case FILTER_TODO:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_UNCOMPLETED
} from "../actions/filterActions";

import { ADD_TASK } from "../actions/todoActions";

export const filter = (state = [], action) => {
  switch (action.type) {
    case SHOW_ALL:
      return SHOW_ALL;
    case ADD_TASK:
      return SHOW_ALL;
    case SHOW_COMPLETED:
      return SHOW_COMPLETED;
    case SHOW_UNCOMPLETED:
      return SHOW_UNCOMPLETED;
    default:
      return state;
  }
};

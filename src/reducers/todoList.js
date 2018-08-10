import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  SAVE_TASK,
  TOGGLE_TASK
} from "../actions/todoActions";

import {SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPLETED} from '../actions/filterActions';

export const todoList = (state = [], action) => {
  let index;
  let newState;
  switch (action.type) {
    case ADD_TASK:
    newState = state.map((task) => {
      return {...task, visible: true}
    });
      return [...newState, action.payload];
    case DELETE_TASK:
      newState = [...state];
      state.forEach((task, i) => {
        if (task.id === action.payload) {
          index = i;
        }
      });
      newState.splice(index, 1);
      return newState;
    case EDIT_TASK:
      newState = [...state];
      state.forEach((task, i) => {
        if (task.id === action.payload) {
          index = i;
        }
      });
      newState[index].editable = true;
      return newState;
    case SAVE_TASK:
      newState = [...state];
      state.forEach((task, i) => {
        if (task.id === action.payload) {
          index = i;
        }
      });
      newState[index].editable = false;
      return newState;
    case TOGGLE_TASK:
      newState = [...state];
      state.forEach((task, i) => {
        if (task.id === action.payload) {
          index = i;
        }
      });
      newState[index].complited = !state[index].complited;
      return newState;
    case SHOW_ALL:
      newState = state.map((task) => {
        return {...task, visible: true}
      });
      return newState
    case SHOW_COMPLETED:
      newState = state.map((task) => {
        return task.complited ? {...task, visible: true} : {...task, visible: false}
      });
      return newState;
        case SHOW_UNCOMPLETED:
        newState = state.map((task) => {
          return !task.complited ? {...task, visible: true} : {...task, visible: false}
        });
      return newState
    default:
      return state;
  }
};

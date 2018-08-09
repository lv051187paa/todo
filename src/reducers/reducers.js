import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../actions/actions";

export const initialState = [
  {
    id: 1,
    title: "task1",
    editable: false
  },
  {
    id: 2,
    title: "task2",
    editable: false
  },
  {
    id: 3,
    title: "task3",
    editable: false
  }
];

export const todoList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
        return [...state, action.payload];
    case DELETE_TASK:
        let index;
        let newState = [...state];
        state.forEach((task, i) => {
            if ( task.id === action.payload ) {
                index = i;
            }
        })
        newState.splice(index, 1)
        return newState;   
    case EDIT_TASK:
        newState = [...state];
        state.forEach((task, i) => {
            if ( task.id === action.payload ) {
                index = i;
            }
        })
        newState[index].editable = true
        return newState
    default:
      return state;
  }
};

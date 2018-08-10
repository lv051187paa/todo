import { generator } from '../services/idGenerator';

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const SAVE_TASK = 'SAVE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const onAdd = (task) => ({
    type: ADD_TASK,
    payload: {
        id: generator(),
        title: task,
        editable: false,
        complited: false,
        visible: true
      }
})

export const onDelete = (index) => ({
    type: DELETE_TASK,
    payload: index
})

export const onEdit = (index) => ({
    type: EDIT_TASK,
    payload: index
})

export const onSave = (index) => ({
    type: SAVE_TASK,
    payload: index
})

export const onToggle = (index) => ({
    type: TOGGLE_TASK,
    payload: index
})
import { combineReducers } from 'redux';

import { todoList } from './todoList';
import { filter } from './filter';

export const allReducers = combineReducers({
    todoList,
    filter
})
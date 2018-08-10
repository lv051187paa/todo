export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_UNCOMPLETED = 'SHOW_UNCOMPLETED';

export const showAll = (tasksArray) => ({
    type: SHOW_ALL,
    payload: SHOW_ALL
})

export const showCompleted = (tasksArray) => ({
    type: SHOW_COMPLETED,
    payload: SHOW_COMPLETED
})
export const showUncompleted = (tasksArray) => ({
    type: SHOW_UNCOMPLETED,
    payload: SHOW_UNCOMPLETED
})
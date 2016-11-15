import { TASK_ACTIONS, TASK_REQUEST_ACTIONS } from './constants';
import { combineReducers } from 'redux';

const defaultState = [];
const initStatus = 'TASK_REQUEST_SUCCESS';

const tasks = (state = defaultState, action) => {
    switch (action.type) {
    case 'GET_TASKS':
        return action.res.data.tasks;
    case 'CREATE_TASK':
        return state.concat(action.res.data.text);
    case 'EDIT_TASK':
        return state.set(action.id, action.text);
    case 'DELETE_TASK':
        return state.delete(action.id);
    default:
        return state;
}
};

export const requestStatus = (rState = initStatus, { type, curry }) =>
	TASK_REQUEST_ACTIONS.has(type) ? curry(rState) : rState;

export const tasksRequestData = (state = defaultState, { type, curry }) =>
	TASK_ACTIONS.has(type) ? curry(state) : state;
// export const tasks = tasksRequestData;
export const tasksReducer = combineReducers({ tasksRequestData, requestStatus });
export default tasks;

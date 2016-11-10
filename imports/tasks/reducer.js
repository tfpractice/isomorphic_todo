import { TASK_ACTIONS } from './constants';

const defaultState = [];

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

const tasksReducer = (state = defaultState, { type, curry }) =>
			TASK_ACTIONS.has(type) ? curry(state) : state;

export default tasks;
export { tasksReducer };

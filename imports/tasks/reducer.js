import Immutable from 'immutable';

const defaultState = new Immutable.List().set(0, 'zero');

const tasks = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_TASKS':
            return new Immutable.List(action.res.data);
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

export default tasks;
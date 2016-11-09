// import { TaskRoutes } from '../../server';
import request from 'axios';
import {
    API_URL,
    GET_TASKS,
    CREATE_TASK,
    EDIT_TASK,
    DELETE_TASK,
    TOGGLE_TASK_CHECK,
    TOGGLE_TASK_PRIVACY
} from './constants';
// console.log(TaskRoutes);
export const getTasks = () => ({ type: GET_TASKS, promise: request.get(API_URL) });

export const createTask = (text) => ({
    type: CREATE_TASK,
    promise: request.post(API_URL, {
        time: Date.now(),
        text
    })
});

export const editTask = (id, text) => ({ type: EDIT_TASK, id, text, date: Date.now() });

export const deleteTask = (id) => ({ type: DELETE_TASK, id });
// witch (action.type) {     case 'GET_TODOS':       return new
// Immutable.List(action.res.data);     case 'CREATE_TODO':       return
// state.concat(action.res.data.text);     case 'EDIT_TODO':       return
// state.set(action.id, action.text);     case 'DELETE_TODO':       return
// state.delete(action.id);     default:       return state; export const
// insertTask = (text) => () => ('tasks.insert', text); export const removeTask
// = (taskID) => () => ('tasks.remove', taskID); export const toggleTaskChecked
// = (taskId, setChecked) => () => 	('tasks.setChecked', taskId, setChecked);
// export const toggleTaskPrivacy = (taskId, setToPrivate) => () =>
// 	('tasks.setPrivate', taskId, setToPrivate);
import axios from 'axios';
import {
	API_URL,
	GET_TASKS,
	CREATE_TASK,
	EDIT_TASK,
	DELETE_TASK,
	TOGGLE_TASK_CHECK,
	TOGGLE_TASK_PRIVACY
} from './constants';

export const update = ({ data }) => (tasks) => data;
export const insert = ({ data }) => (tasks) => tasks.concat(data);
export const edit = (id) => (data) => (tasks = []) =>
	tasks.map(t => t.id === id ? { ...t, ...data, } : t);

export const getTasks = () => ({ type: GET_TASKS,
    promise: axios.get(`${API_URL}/tasks`), });

export const updateTasks = ({ data }) =>
	({ type: GET_TASKS, curry: update({ data }) });

export const fetchTasks = () => (dispatch) =>
	axios.get(`${API_URL}/tasks`)
	.then(res => dispatch(updateTasks(res)))
	.catch(err => console.error('there was an error', err));

export const createTask = (text) => ({ type: CREATE_TASK,
    promise: axios.post(API_URL, { time: Date.now(), text, }), });

export const editTask = (id, text) => ({ type: EDIT_TASK, id, text, date: Date.now(), });

export const deleteTask = (id) => ({ type: DELETE_TASK, id });

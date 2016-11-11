import axios from 'axios';
import {
	API_URL,
	GET_TASKS,
	UPDATE_TASKS,
	CREATE_TASK,
	EDIT_TASK,
	DELETE_TASK,
	TOGGLE_TASK_CHECK,
	TOGGLE_TASK_PRIVACY,
} from './constants';

import {
	TASK_REQUEST_PENDING,
	TASK_REQUEST_SUCCESS,
	TASK_REQUEST_FAILURE,
} from './constants';

const update = (newTasks) => (tState) => newTasks;
const insert = ({ data: { task } }) => (tasks) => tasks.concat(task);
const edit = (id) => (data) => (tasks = []) =>
	tasks.map(t => t.id === id ? { ...t, ...data, } : t);

export const getTasks = () =>
	({ type: GET_TASKS, promise: axios.get(`${API_URL}/tasks`), });

export const updateTasks = (tasks) =>
	({ type: UPDATE_TASKS, curry: update(tasks), });

export const fetchTasks = () => (dispatch) =>
	axios
	.get(`${API_URL}/tasks`)
	.then(res => dispatch(updateTasks(res)))
	.catch(err => console.error('there was an error', err));

export const createTask = (text) =>
	({ type: CREATE_TASK, promise: axios.post(API_URL, { time: Date.now(), text, }), });

export const editTask = (id, text) =>
	({ type: EDIT_TASK, id, text, date: Date.now(), });

export const deleteTask = (id) =>
	({ type: DELETE_TASK, id, });

const pending = () => TASK_REQUEST_PENDING;
const success = () => TASK_REQUEST_SUCCESS;
const failure = () => TASK_REQUEST_FAILURE;

export const taskRequestSucess = ({ data: { tasks } }) => (dispatch) => {
    dispatch({ type: TASK_REQUEST_SUCCESS, curry: success });
    return dispatch(updateTasks(tasks));
};

export const taskRequestFailure = (err) =>
	({ type: TASK_REQUEST_FAILURE, curry: failure });

export const requestTasks = () => (dispatch) => {
    dispatch({ type: TASK_REQUEST_PENDING, curry: pending });
    return axios.get(`${API_URL}/tasks`)
     .then(res => dispatch(taskRequestSucess(res)))
     .catch(err => {
        console.error('there was an error', err);
        dispatch(taskRequestFailure(err));
    });;
};

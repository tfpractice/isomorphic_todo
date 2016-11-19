import axios from 'axios';
import {
  API_URL,
  GET_TASKS,
  UPDATE_TASKS,
  CREATE_TASK,
  EDIT_TASK,
  INSERT_TASK,
  DELETE_TASK,
  TOGGLE_TASK_CHECK,
  TOGGLE_TASK_PRIVACY,
} from './constants';

import {
  TASK_REQUEST_PENDING,
  TASK_REQUEST_SUCCESS,
  TASK_REQUEST_FAILURE,
} from './constants';

const pending = () => TASK_REQUEST_PENDING;
const success = () => TASK_REQUEST_SUCCESS;
const failure = () => TASK_REQUEST_FAILURE;

const update = (newTasks) => (tState) => newTasks;
const insert = (task) => (tasks) => tasks.concat(task);
const edit = (task) => (tasks = []) =>
  tasks.map(t => t.id === task.id ? { ...t, ...task } : t);

const remove = ({ id }) =>(tasks)=> tasks.filter(t=> t.id !== id);

export const taskRequestSucess = ({ data: { tasks } }) => (dispatch) => {
    console.log('CALLED TASK REQUEST success');
    dispatch({ type: TASK_REQUEST_SUCCESS, curry: success });
    return dispatch(updateTasks(tasks));
  };

export const taskRequestFailure = (err) =>(dispatch)=> {
  console.error('request failed', err);
  dispatch({ type: TASK_REQUEST_FAILURE, curry: failure });};

export const getTasks = () => (dispatch) => {
    dispatch({ type: TASK_REQUEST_PENDING, curry: pending });
    console.log('RERIEVEING TASKS');
    return axios.get(`${API_URL}/tasks`)
    .then(res=> {console.log('RESPONSE RECIVED', res); return (taskRequestSucess(res)(dispatch));})
    .catch(taskRequestFailure);
  };

export const insertTask = (task) =>
 ({ type: INSERT_TASK, curry: insert(task), });

export const createTask = (taskProps) => (dispatch) =>
     axios.post(`${API_URL}/tasks`, taskProps)
    .then(({ data:{ task } })=> dispatch(insertTask(task)))
    .catch(err => console.error('there was an error in creation', err));

export const updateTasks = (tasks) => {
    return ({ type: UPDATE_TASKS, curry: update(tasks), });};

export const updateTask = (task)=>
  ({ type: EDIT_TASK, curry: edit(task) });

export const editTask = ({ id, cuid })=>(dispatch)=> (taskProps) =>
   axios.patch(`${API_URL}/tasks/${id}`, taskProps)
  .then(({ data:{ task } })=> dispatch(updateTask(task)))
  .catch(err => console.error('there was an error in update', err));
export const removeTask = ({ id })=>
({ type: DELETE_TASK, curry: remove({ id }) });

export const deleteTask = ({ id }) =>(dispatch)=>
  axios.delete(`${API_URL}/tasks/${id}`)
  .then(()=>dispatch(removeTask({ id })))
  .catch(err=> console.error('there was an error in delete', err));

// import { TaskRoutes } from '../../server';
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

export const update = ({ data })=> (tasks)=> data;
export const insert = ({ data })=>(tasks)=> tasks.concat(data);
export const edit = (id)=>(data)=>(tasks)=> tasks.map(t=>t.id === id ? { ...t, ...data } : t);
export const getTasks = () =>
 ({ type: GET_TASKS, promise: axios.get(API_URL) });

export const updateTasks = ({ data }) => ({ type:GET_TASKS, curry:update({ data }) });
export const fetchTasks = ()=>(dispatch)=> {
    console.log('fetchiing');
    return axios.get(API_URL).then(updateTasks);
};

export const createTask = (text) => ({ type: CREATE_TASK,
    promise: axios.post(API_URL, { time: Date.now(),
        text, }), });

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

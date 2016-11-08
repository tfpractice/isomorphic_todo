import request from 'axios';
import { API_URL, GET_TODOS, CREATE_TODO, EDIT_TODO, DELETE_TODO, } from './constants';

export const getTodos = () => ({
	type: GET_TODOS,
	promise: request.get(API_URL),
});

export const createTodo = (text) => ({
	type: CREATE_TODO,
	promise: request.post(API_URL, { time: Date.now(), text }),
});

export const editTodo = (id, text) => ({
	type: EDIT_TODO,
	id,
	text,
	date: Date.now(),
});

export const deleteTodo = (id) => ({
	type: DELETE_TODO,
	id,
});
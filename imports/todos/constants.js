export const API_URL =
	'https://webtask.it.auth0.com/api/run/wt-milomord-gmail_com-0/redux-tutorial-backend?webtask_no_cache=1';

export const GET_TODOS = 'GET_TODOS';
export const CREATE_TODO = 'CREATE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const TODO_ACTIONS = new Set([GET_TODOS,
	CREATE_TODO,
	EDIT_TODO,
	DELETE_TODO,
]);
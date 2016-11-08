import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const TodoForm = ({ createTodo, handleSubmit }) => (
	<div>
     	<form onSubmit={handleSubmit}>
        	<input type="text" name='task_input' placeholder="type todo" />
       		<button value="OK!">  Submit </button>
    	</form>
    </div>
);

const mapStateToProps = (state, { createTodo }) => ({
	handleSubmit: (e) => {
		e.preventDefault();
		let node = e.target.elements.task_input;
		createTodo(node.value);
		node.value = '';
	},
});
export default connect(mapStateToProps)(TodoForm);
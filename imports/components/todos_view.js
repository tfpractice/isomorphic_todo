import React from 'react';
import { PropTypes } from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';

const btnStyle = { margin: '1em 0 1em 1em', };

const TodosView = ({ todos, editTodo, deleteTodo, handleEdit }) => (
	<div id="todos-list">
        { todos.map((todo, index) => (
            <div style={btnStyle} key={index}>
                <span>{todo}</span>
                <button style={btnStyle} data-id={index} onClick={()=>deleteTodo(Number(index))}>X</button>
                <button style={btnStyle} data-id={index} onClick={handleEdit(Number(index))}>Edit</button>
             </div>))}
      </div>
);

TodosView.propTypes = {
	// todos: PropTypes.instanceOf(Immutable.List).isRequired,
	editTodo: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { todos, editTodo, deleteTodo }) => ({
	handleEdit: (id) => (e) => {
		const currentVal = todos.get(id);
		let text = window.prompt('', currentVal);
		editTodo(id, text);
	},
});

export default connect(mapStateToProps)(TodosView);
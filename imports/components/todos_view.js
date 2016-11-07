import React from 'react';
import { PropTypes } from 'react';
import Immutable from 'immutable';

const TodosView = ({ todos, editTodo, deleteTodo }) => {
	const handleEdit = (todos) => (id) => (e) => {
		const currentVal = todos.get(id);

		let text = window.prompt('', currentVal);

		editTodo(id, text);
	};

	const btnStyle = { margin: '1em 0 1em 1em', };
	return (
		<div id="todos-list">
        {
                                   todos.map((todo, index) => {
                return (
                  <div style={btnStyle} key={index}>
                <span>{todo}</span>

                <button style={btnStyle} data-id={index} onClick={()=>deleteTodo(Number(index))}>X</button>
                <button style={btnStyle} data-id={index} onClick={handleEdit(todos)(Number(index))}>Edit</button>
              </div>
                );
            })
                                                                 }
      </div>
	);
};

TodosView.propTypes = {
	todos: PropTypes.instanceOf(Immutable.List).isRequired,
	editTodo: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired,
};

export default TodosView;
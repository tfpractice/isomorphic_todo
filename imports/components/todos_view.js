import React from 'react';
import { PropTypes } from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

const btnStyle = { margin: '1em 0 1em 1em', };

const TodosView = ({ todos, editTodo, deleteTodo, handleEdit }) => (
	<div id="todos-list">
        { todos.map((todo, index) => (
            <div key={index}>
                <span>{todo}</span>   
                <FlatButton label="Delete" data-id={index} onClick={()=>deleteTodo(Number(index))}/>
                <FlatButton label="Edit" data-id={index} onClick={handleEdit(Number(index))}/>
             </div>))}
      </div>
);

TodosView.propTypes = {
	// todos: PropTypes.instanceOf(Immutable.List).isRequired,
	editTodo: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired,
};
TodosView.contextTypes = { muiTheme: React.PropTypes.object, };

const mapStateToProps = (state, { todos, editTodo, deleteTodo }) => ({
	handleEdit: (id) => (e) => {
		const currentVal = todos.get(id);
		let text = window.prompt('', currentVal);
		editTodo(id, text);
	},
});

export default connect(mapStateToProps)(TodosView);
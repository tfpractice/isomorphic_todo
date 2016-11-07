import React, { Component, PropTypes } from 'react';
import TodosView from './todos_view';
import TodosForm from './TodosForm';
import { bindActionCreators } from 'redux';
import * as TodoActions from 'actions/TodoActions';
import { connect } from 'react-redux';

const Home = ({ todos, dispatch }) => (
	<div id="todo-list">
        <TodosView todos={todos}
                {...bindActionCreators(TodoActions, dispatch)} />

        <TodosForm
                {...bindActionCreators(TodoActions, dispatch)}/>
      </div>
);

Home.propTypes = {
	todos: PropTypes.any.isRequired,
	dispatch: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({ todos: state.todos, needs: TodoActions.getTodos });
export default connect(mapStateToProps)(Home);
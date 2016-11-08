import React, { Component, PropTypes } from 'react';
import TodosView from './todos_view';
import TodosForm from './todos_form';
import { bindActionCreators } from 'redux';
import { TodoActions } from '../todos';
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
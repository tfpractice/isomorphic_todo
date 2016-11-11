import React, { Component, PropTypes } from 'react';
import TodosView from './todos_view';
import { TasksView } from '../tasks';
import TodosForm from './todos_form';
import { bindActionCreators } from 'redux';
import { TodoActions } from '../todos';
import { actions as TaskActions } from '../tasks';
import { connect } from 'react-redux';

const Home = ({ todos, dispatch, tasks }) => (
    <div id="todo-list">
        <TodosView todos={todos} {...bindActionCreators(TodoActions, dispatch)}/>
                <TasksView tasks={tasks}/>
        <TodosForm {...bindActionCreators(TodoActions, dispatch)}/>
    </div>
);

export const needs = [TodoActions.getTodos, TaskActions.fetchTasks,
    TaskActions.requestTasks,
];
Home.needs = needs;

Home.propTypes = {
    todos: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ todos, tasks, tasksReducer }, own) => {
    // console.log('tasksReducer from Home Component', tasksReducer);
    return ({ todos, tasks, });
};

export default connect(mapStateToProps)(Home);
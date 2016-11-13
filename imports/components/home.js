import React, { Component, PropTypes } from 'react';
import TodosView from './todos_view';
import { TasksView } from '../tasks';
import TodosForm from './todos_form';
import { bindActionCreators } from 'redux';
import { TodoActions } from '../todos';
import { actions as TaskActions } from '../tasks';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

const Home = ({ todos, dispatch, tasks }, context) => {
    return (
        <div id="todo-list">
          <TasksView tasks={tasks} {...bindActionCreators(TodoActions, dispatch)}/>
          <TodosView todos={todos} {...bindActionCreators(TodoActions, dispatch)}/>
          <TodosForm {...bindActionCreators(TodoActions, dispatch)}/>
    </div>
    );
};

export const needs = [TodoActions.getTodos, TaskActions.fetchTasks,
    TaskActions.requestTasks,
];
Home.needs = needs;

Home.propTypes = { todos: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired, };
Home.contextTypes = { muiTheme: React.PropTypes.object, };

const mapStateToProps = (state, own) => {
    const { todos, tasks, tasksReducer } = state;
    
    return ({ todos, tasks, });
};

export default connect(mapStateToProps)(Home);

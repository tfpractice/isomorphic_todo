import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { reset } from 'redux-form';
import TaskForm from './form';
const resetForm = (name)=>(action, dispatch)=> dispatch(reset(name));
const TasksView = ({ tasks, actions }) => {
  return (

<div className="tasks-list">
  <TaskForm  form={'newTaskForm'}
    onSubmit={actions.createTask}
    onSubmitSuccess={resetForm('newTaskForm')}/>
  {tasks.map((task, index) => (
    <div key={index}>
      <span>{task.title}</span>
      <FlatButton label="Delete" data-id={index} />
      <FlatButton label="Edit" data-id={index} />
      <TaskForm key={task.id}
        form={ `edit_form${task.id}` }
        initialValues={task}
        onSubmit={actions.editTask(task)}
        onSubmitSuccess={resetForm(`edit_form${task.id}`)}/>
      </div>
    ))}
  </div>);};

TasksView.contextTypes = { muiTheme: React.PropTypes.object, };

export default TasksView;

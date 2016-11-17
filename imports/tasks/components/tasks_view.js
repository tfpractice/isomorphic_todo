import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import TaskForm, { EditForm } from './form';

const TasksView = ({ tasks, actions }) => {
  console.log(EditForm);
  return (
  <div className="tasks-list">
    <TaskForm  onSubmit	={actions.createTask}/>
    <FlatButton label="TASKS" onClick={actions.fetchTasks}/>
    {tasks.map((task, index) => (
      <div key={index}>
        <span>{task.title}</span>
        <FlatButton label="Delete" data-id={index} />
        <FlatButton label="Edit" data-id={index} />
        <EditForm key={task.id} form={ `edit_form${task.id}` } task={task} onSubmit={actions.editTask(task)}/>
      </div>
    ))}
  </div>);};

TasksView.contextTypes = { muiTheme: React.PropTypes.object, };

export default TasksView;

import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import TaskForm from './form';

const TasksView = ({ tasks, actions }) =>  (
  <div className="tasks-list">
    <TaskForm {...actions} onSubmit	={actions.createTask}/>
    <FlatButton label="TASKS" onClick={actions.fetchTasks}/>
    {tasks.map((task, index) => (
      <div key={index}>
        <span>{task.title}</span>
        <FlatButton label="Delete" data-id={index} />
        <FlatButton label="Edit" data-id={index} />
      </div>
    ))}
  </div>
   );

TasksView.contextTypes = { muiTheme: React.PropTypes.object, };

export default TasksView;

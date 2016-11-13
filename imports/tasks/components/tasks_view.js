import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import TaskForm from './form';

const TasksView = ({ tasks }, ...actions) => (
	<div className="tasks-list">
		<TaskForm />

		<FlatButton label="TASKS"/>
		{tasks.map((task, index) => (
			<div style={btnStyle} key={index}>
				<span>{task}</span>
				<button style={btnStyle} data-id={index}>X</button>
				<button style={btnStyle} data-id={index}>Edit</button>
			</div>
		))}
	</div>
);

TasksView.contextTypes = { muiTheme: React.PropTypes.object, };

export default TasksView;

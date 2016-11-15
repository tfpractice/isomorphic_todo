import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import TaskForm from './form';

const addTaskWVals = (values)=> {
    // values.preventDefault();
			 console.log('======SUBMITTING========');
			 console.log('these are the values', values);
			 return false;
};
//
// onSubmit={(values, ...rest)=> {
// 		 values.preventDefault();
//
// 		 console.log('======SUBMITTING========');
// 		 console.log('these are the values', values);
// 		 console.log('these are the rest', rest);
// 		 return false;
//  }
const TasksView = ({ tasks, actions }, context) => {
    console.log('context', context);
    console.log('actions', actions);
    return (

<div className="tasks-list">
	<TaskForm {...actions} onSubmit	={(values)=> {
		console.log(values);
		actions.createTask(values);
		// addTaskWVals(values);
	}}/>
	<FlatButton label="TASKS" onClick={actions.fetchTasks}/>
	{tasks.map((task, index) => (
      <div style={btnStyle} key={index}>
				<span>{task}</span>
				<button style={btnStyle} data-id={index}>X</button>
				<button style={btnStyle} data-id={index}>Edit</button>
			</div>
     ))}
	</div>
   );
};

TasksView.contextTypes = { muiTheme: React.PropTypes.object, };

export default TasksView;

import React, { PropTypes } from 'react';
import classnames from 'classnames';

import React from 'react';
import { PropTypes } from 'react';
import Immutable from 'immutable';
const handleEdit = (tasks) => (id) => (e) => {
	const currentVal = tasks.get(id);

	let text = window.prompt('', currentVal);

	editTask(id, text);
};

const btnStyle = { margin: '1em 0 1em 1em', };
const TasksView = ({ tasks, editTask, deleteTask }) => (
	<div id="tasks-list">
        {tasks.map((task, index) => (
            <div style={btnStyle} key={index}>
                <span>{task}</span>	
                <button style={btnStyle} data-id={index} onClick={()=>deleteTask(Number(index))}>X</button>
                <button style={btnStyle} data-id={index} onClick={handleEdit(tasks)(Number(index))}>Edit</button>
              </div>
                );
            )}
      </div>
);

TasksView.propTypes = {
	tasks: PropTypes.instanceOf(Immutable.List).isRequired,
	editTask: PropTypes.func.isRequired,
	deleteTask: PropTypes.func.isRequired,
};

export default TasksView;


const Task = ({
	_id,
	text,
	private: priv,
	checked,
}) => (
	<li className={classnames({ checked, private: priv })}>
            <button 
                className="delete" 
                onClick={()=>deleteThisTask(_id)}>  &times;
            </button>
            <input 
                type="checkbox" 
                readOnly 
                checked={checked} 
                onClick={()=>toggleChecked(_id, checked)}
             />
            { showPrivateButton ? (
                <button 
                    className="toggle-priv" 
                    onClick={()=>togglePrivate(_id, priv)}>
                        { priv ? 'Private' : 'Public' }
                </button>) : ''}

            <span className="text">
              <strong>{username}</strong>: { text }
            </span>
        </li>
);

Task.propTypes = {
	// This component gets the task to display through a React prop.
	// We can use propTypes to indicate it is required
	// task: PropTypes.object.isRequired,
};


const toggleChecked = (_id, checked) => {
	// actions.toggleTaskChecked(_id, !checked);
	// Set the checked property to the opposite of its current value
	Meteor.call('tasks.setChecked', _id, !checked);
};

const deleteThisTask = (_id) => {
	// actions.removeTask(_id);
	Meteor.call('tasks.remove', _id);
};

const togglePrivate = (_id, private) => {
	// actions.toggleTaskPrivacy(_id, !priv);
	Meteor.call('tasks.setPrivate', _id, !private);
};

export default Task;
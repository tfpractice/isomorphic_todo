import React, { PropTypes } from 'react';
// import Immutable from 'immutable'; import classnames from 'classnames';
// import React from 'react'; import { PropTypes } from 'react'; import
// Immutable from 'immutable'; const handleEdit = (tasks) => (id) => (e) => {
// const currentVal = tasks.get(id);  let text = window.prompt('', currentVal);
// editTask(id, text); };

const btnStyle = {
    margin: '1em 0 1em 1em'
};
const TasksView = ({ tasks }) => (
    <div className="tasks-list">
      <p>tasks</p>
        {tasks.map((task, index) => (
            <div style={btnStyle} key={index}>
                <span>{task}</span>
                <button style={btnStyle} data-id={index}>X</button>
                <button style={btnStyle} data-id={index}>Edit</button>
            </div>
        ))}
    </div>
);

// TasksView.propTypes = {     // tasks:
// PropTypes.instanceOf(Immutable.List).isRequired, editTask:     //
// PropTypes.func.isRequired, deleteTask: PropTypes.func.isRequired };

export default TasksView;
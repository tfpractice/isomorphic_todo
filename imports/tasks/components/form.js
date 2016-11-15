import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import { RadioButton } from 'material-ui/RadioButton';
import FlatButton from 'material-ui/FlatButton';
;
import {
  Checkbox,
  RadioButtonGroup,
  SelectField,
  TextField,
  Toggle
} from 'redux-form-material-ui';
// onSubmit={handleSubmit((values)=> {
  // console.log('=============form porps======', values);
  // return createTask(values);  })}


// _id
// title,
// description,
// completed,
// private,
// dateAdded
// cuid
const TaskFormF = ({ handleSubmit, onSubmit, createTask }) => {
    // console.log('createTask', createTask);
    return (
  <form onSubmit={handleSubmit}>
    <Field name="title" component={TextField} hintText="What task"/>
    <Field name="description" component={TextField} hintText="What about it"/>
    <Field name="private" component={Toggle} label="Private?"/>
    <Field name="completed" component={Checkbox} label="Is it done?"/>
    <FlatButton type="submit"/>
</form>
  );
};



// Decorate with redux-form
const TaskForm = reduxForm({ form: 'TaskForm' })(TaskFormF);

export default TaskForm;

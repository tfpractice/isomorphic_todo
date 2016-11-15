import React, { Component, PropTypes } from 'react';

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

const TaskFormF = ({ handleSubmit, onSubmit, createTask }) =>  (
  <form onSubmit={handleSubmit}>
    <Field name="title" component={TextField} hintText="What task"/>
    <Field name="description" component={TextField} hintText="What about it"/>
    <Field name="private" component={Toggle} label="Private?"/>
    <Field name="completed" component={Checkbox} label="Is it done?"/>
    <FlatButton type="submit"/>
</form>
  );

const TaskForm = reduxForm({ form: 'TaskForm' })(TaskFormF);

export default TaskForm;

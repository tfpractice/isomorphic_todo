import React, { PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import FlatButton from 'material-ui/FlatButton';
;
import {
  Checkbox,
  TextField,
  Toggle
} from 'redux-form-material-ui';

const TaskFormF = ({ handleSubmit }) =>  (
  <form onSubmit={handleSubmit}>
    <Field name="title" component={TextField} hintText="What task"/>
    <Field name="description" component={TextField} hintText="What about it"/>
    <Field name="private" component={Toggle} label="Private?"/>
    <Field name="completed" component={Checkbox} label="Is it done?"/>
    <FlatButton label="submit" type="submit"/>
</form>
  );

const TaskForm = reduxForm({ form: 'TaskForm' })(TaskFormF);
export const EditForm = reduxForm({ form: 'EditForm' })(TaskFormF);
export default TaskForm;

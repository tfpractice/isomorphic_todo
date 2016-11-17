import React, { PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import FlatButton from 'material-ui/FlatButton';
;
import {
  Checkbox,
  TextField,
  Toggle
} from 'redux-form-material-ui';

const TaskFormF = ({ handleSubmit,  dispatch, ...props }) =>  {
  console.log('I am the new form',  props);
  console.log('I am the new form',  props.clearSubmit.toString());
  return (



<form onSubmit={(v)=> {
  console.log('VALUES', v);handleSubmit(v);
  // console.log('VALUES', v);handleSubmit(v);props.reset(props.form);
  }} >
  <Field name="title" component={TextField} hintText="What task"/>
  <Field name="description" component={TextField} hintText="What about it"/>
    <Field name="private" component={Toggle} label="Private?"/>
    <Field name="completed" component={Checkbox} label="Is it done?"/>
    <FlatButton label="submit" type="submit"  />
  </form>
);
};

const EditFormF = ({ handleSubmit, task, dispatch, ...props }) =>  {
  console.log('I am edit form', task, props);
  return (



<form onSubmit={(v)=> {
    console.log('VALUES', v); handleSubmit(v);props.reset(props.form);
  }}>
    <Field name="title" component={TextField} hintText="What task"/>
    <Field name="description" component={TextField} hintText="What about it"/>
    <Field name="private" component={Toggle} label="Private?"/>
    <Field name="completed" component={Checkbox} label="Is it done?"/>
    <FlatButton label="submit" type="submit"  />
  </form>
);};

const TaskForm = reduxForm({ form: 'TaskForm' })(TaskFormF);
export const EditForm = reduxForm()(EditFormF);
const mapStateToProps = (state, { task })=>({ form: `edit_form${task.id}` });
export const EditForm2 = connect(mapStateToProps)(EditFormF);
export default TaskForm;

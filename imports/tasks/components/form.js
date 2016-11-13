import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import { RadioButton } from 'material-ui/RadioButton';
import {
  Checkbox,
  RadioButtonGroup,
  SelectField,
  TextField,
  Toggle
} from 'redux-form-material-ui';

// _id
// title
// description
// completed
// private
// dateAdded
// cuid
// const TaskForm=({handleSubmit}) =>{

// onSubmit = { handleSubmit };
class TaskFormC extends Component {
    render() {
        console.log(this.props);
        return (
          <form>
            <Field name="title" component={TextField} hintText="What task"/>
            <Field name="description" component={TextField} hintText="What about it"/>
            <Field name="private" component={Toggle} label="Private?"/>
            <Field name="completed" component={Checkbox} label="Is it done?"/>
          </form>
        );
    }
}

// Decorate with redux-form
const TaskForm = reduxForm({ form: 'TaskForm' })(TaskFormC);

export default TaskForm;

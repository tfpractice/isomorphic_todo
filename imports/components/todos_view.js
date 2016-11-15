import React from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

const btnStyle = { border: '1px solid #ff00ff', };

const TodosView = ({ todos, deleteTodo, handleEdit }) => (
  <div id="todos-list">
    { todos.map((todo, index) => (
      <div key={index}>
        <span>{todo}</span>
        <FlatButton style={btnStyle} label="Delete" data-id={index} onClick={()=>deleteTodo(Number(index))}/>
        <FlatButton style={btnStyle} label="Edit" data-id={index} onClick={handleEdit(Number(index))}/>
      </div>))}
  </div>
);

TodosView.propTypes = {
  // todos: PropTypes.instanceOf(Immutable.List).isRequired,
  // editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired, };
TodosView.contextTypes = { muiTheme: React.PropTypes.object, };

const mapStateToProps = (state, { todos, editTodo, deleteTodo }) =>
({ handleEdit: (id) => (e) => {
    const currentVal = todos.get(id);
    let text = window.prompt('', currentVal);
    editTodo(id, text);
  }, });

export default connect(mapStateToProps)(TodosView);

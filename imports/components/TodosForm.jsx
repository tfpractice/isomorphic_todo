import React, { PropTypes } from 'react';

// const TodoForm = (createTodo)=>(<div>
//         <input type="text" placeholder="type todo" ref="todo-input" />
//         <input type="submit" value="OK!" onClick={this.handleSubmit} />
//       </div>)
export default class TodosForm extends React.Component {
// const  TodosForm extends React.Component {
  static propTypes = {
    createTodo: PropTypes.func.isRequired
  };

  handleSubmit = (e) => {
    console.log('e', e);
    let node = this.refs['todo-input'];

    this.props.createTodo(node.value);

    node.value = '';
  };

  render() {
    return (
      <div>
        <input type="text" placeholder="type todo" ref="todo-input" />
        <input type="submit" value="OK!" onClick={this.handleSubmit} />
      </div>
    );
  }
}

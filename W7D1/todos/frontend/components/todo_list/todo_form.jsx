import React from 'react';
import uniqueId from '../../util/api_util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: uniqueId, title: '', body: '', done: false };
  }

  updateInput(key) {
    console.log();
    return (event => {
      this.setState({[key]: event.currentTarget.value});
      console.log(this.state);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.bind(this).receiveTodo(this.state);
  }

  render() {
    const title = this.state.title;
    const body = this.state.body;
    const done = this.state.done;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input onChange={this.updateInput('title')} value={title}></input>
        </label>
        <label>
          Body:
          <input onChange={this.updateInput('body')} value={body}></input>
        </label>
        <label>
          Done:
          <input onChange={this.updateInput('done')} value={done}></input>
        </label>
        <button>Submit!</button>
      </form>
    );
  }
}

export default TodoForm;

import React from "react";
import uniqueId from "../../util/api_util";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: "", body: "", done: false };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(key) {
    return event => {
      this.setState({ [key]: event.target.value });
      console.log(this.state);
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveTodo(todo);
    // reset form
    this.setState({
      title: "",
      body: ""
    });
  }

  render() {
    const title = this.state.title;
    const body = this.state.body;
    const done = this.state.done;
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input onChange={this.updateInput("title")} value={title} required />
        </label>
        <br />
        <label>
          Body:
          <textarea onChange={this.updateInput("body")} value={body} required />
        </label>
        <br />
        <button className="create-button">Create Todo!</button>
      </form>
    );
  }
}

export default TodoForm;

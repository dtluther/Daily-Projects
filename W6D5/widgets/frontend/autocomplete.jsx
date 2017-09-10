import React from "react";

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: ""
    };
  }

  handleInput(event) {
    this.setState({ inputVal: event.currentTarget.value });
  }

  selectNames() {
    const matches = [];
    const names = this.props.names;
    const slice = this.state.inputVal;
    names.forEach(name => {
      if (slice.toLowerCase() === name.toLowerCase().slice(0, slice.length)) {
        matches.push(name);
      }
    });

    return matches.length === 0 ? ["Woops! We don't have that name!"] : matches;
  }

  handleClick(event) {
    this.setState({ inputVal: event.currentTarget.innerText });
  }

  render() {
    const selectedNames = this.selectNames().map(name => (
      <li onClick={this.handleClick.bind(this)} key={name + "li"}>
        {name}
      </li>
    ));
    return (
      <div>
        <section className="auto">
          <input className="searchname"
            onChange={this.handleInput.bind(this)}
            type="text"
            value={this.state.inputVal}
            placeholder="Search..."
          />
          <ul>{selectedNames}</ul>
        </section>
      </div>
    );
  }
}

export default Autocomplete;

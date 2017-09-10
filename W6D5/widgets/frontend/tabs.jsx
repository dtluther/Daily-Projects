import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedIndex: 0 };
  }

  render() {
    const titles = this.props.panes.map(pane => <li>{pane.title}</li>);
    const contents = this.props.panes.map(pane => <li>{pane.content}</li>);
    return (
      <div>
        <ul>
          {titles}
        </ul>
        <article>{contents}</article>
      </div>
    );
  }
}

export default Tabs;

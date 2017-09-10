import React from "react";

class Clock extends React.Component {
  constructor() {
    super();
    console.log("hello");

    this.state = {
      time: new Date()
    };

    // this.tick = this.tick.bind(this);
  }

  tick() {
    console.log("ticktick");
    this.setState({ time: new Date() });
    this.tickerId += 1;
  }

  componentDidMount() {
    console.log("hello");
    this.intervalId = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    this.intervalId.clearInterval();
  }

  render() {
    const fullDate = this.state.time.toDateString();

    const hours = this.state.time.getHours();
    const minutes = this.state.time.getMinutes();
    const seconds = this.state.time.getSeconds();
    const GMT = this.state.time.toGMTString();
    return (
      <div className="parent">
        <h1>Hi Thai!</h1>
        <section className="timedate">
          <span>
            <p>Time:</p>
            <br />
            <p>Date:</p>
          </span>
          <span>
            <p>
              {hours}:{minutes}:{seconds}
            </p>
            <br />
            <p>{fullDate}</p>
          </span>
        </section>
      </div>
    );
  }
}

export default Clock;

import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  onClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span>Value {this.state.count} </span>
        <button onClick={this.onClick}>Increment</button>
      </div>
    );
  }
}

export default Counter;

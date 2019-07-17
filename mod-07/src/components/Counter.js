import React, { PureComponent } from "react";
import withErrorBoundary from "./errorBoundary";

class Counter extends PureComponent {
  // constructor(props) {
  //   super(props);

  //   this.onClick = this.onClick.bind(this);
  // }

  state = {
    count: 0
  };

  onClick = () => {
    this.setState(state => ({
      count: state.count + 1
    }));
    this.setState(state => ({
      count: state.count + 1
    }));
    // this.setState({ count: null });
  };

  // componentWillMount() {
  //   console.log("componentWillMount");
  // }
  componentDidMount() {
    console.log("componentDidMount is better");
  }

  render() {
    return (
      <>
        <span>Value {this.state.count.toString()} </span>
        <button onClick={this.onClick}>Increment</button>
      </>
    );
  }
}

export default withErrorBoundary(Counter);

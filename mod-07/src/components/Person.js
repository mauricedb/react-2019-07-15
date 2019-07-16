import React, { Component } from "react";

import Clock from "./Clock";

class Person extends Component {
  state = {
    firstName: "Maurice",
    lastName: "de Beijer"
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { firstName, lastName } = this.state;

    return (
      <div>
        <div>
          <label>Firstname: </label>
          <input name="firstName" value={firstName} onChange={this.onChange} />
        </div>
        <div>
          <label>Lastname: </label>
          <input name="lastName" value={lastName} onChange={this.onChange} />
        </div>
        <Clock interval={1000} />
      </div>
    );
  }
}

export default Person;

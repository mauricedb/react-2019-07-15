import React, { Component } from "react";

import Clock from "./Clock";

function LabeledInput({ label, value, onChange, name }) {
  return (
    <div>
      <label>{label} </label>
      <input name={name} value={value} onChange={onChange} />
    </div>
  );
}

function PersonPresentation({ firstName, lastName, onChange }) {
  return (
    <div>
      <LabeledInput
        label="Firstname:"
        value={firstName}
        onChange={onChange}
        name="firstName"
      />
      <div>
        <label>Lastname: </label>
        <input name="lastName" value={lastName} onChange={onChange} />
      </div>
      <Clock interval={1000} />
    </div>
  );
}

class PersonContainer extends Component {
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
      <PersonPresentation
        firstName={firstName}
        lastName={lastName}
        onChange={this.onChange}
      />
    );
  }
}

export default PersonContainer;

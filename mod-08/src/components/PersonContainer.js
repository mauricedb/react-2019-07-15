import React, { Component } from "react";
import PersonPresentation from "./PersonPresentation";

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
    const { onSave } = this.props;

    return (
      <PersonPresentation
        firstName={firstName}
        lastName={lastName}
        onChange={this.onChange}
        onSave={onSave}
      />
    );
  }
}

export default PersonContainer;

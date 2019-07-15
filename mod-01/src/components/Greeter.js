import React, { Component } from "react";

// class Greeter extends Component {
//   render() {
//     const { message } = this.props;

//     return <div>Hello there: {message}</div>;
//   }
// }

function Greeter({ message, person }) {
  return (
    <div>
      Hello there from a function: {message} with {person.firstName}
    </div>
  );
}

// export const Greeter = () => <div>Hello there from a function</div>;

export default Greeter;

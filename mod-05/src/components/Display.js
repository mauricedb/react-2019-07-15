import React from "react";
import { connect } from "react-redux";

function Display({ count, fullName }) {
  return (
    <div>
      The value is: {count} for {fullName}
    </div>
  );
}

export default connect(function(state) {
  return {
    count: state.count,
    fullName: state.person.firstName + " " + state.person.lastName
  };
})(Display);

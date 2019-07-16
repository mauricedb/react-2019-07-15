import React from "react";
import { connect } from "react-redux";

import { createIncrementAction } from "../store/actions";

function Counter(props) {
  const count = props.count;
  return (
    <div>
      <span>Value {count} </span>
      <button
        onClick={() => {
          props.increment();
          console.log("Inrement the count");
        }}
      >
        Increment
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: function() {
      dispatch(createIncrementAction());
    }
  };
}

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
);
const wrappedCounter = connected(Counter);
export default wrappedCounter;

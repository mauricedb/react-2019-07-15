import React from "react";

function Counter() {
  const count = 0;
  return (
    <div>
      <span>Value {count} </span>
      <button
        onClick={() => {
          console.log("Inrement the count");
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;

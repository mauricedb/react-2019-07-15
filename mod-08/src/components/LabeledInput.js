import React from "react";

function LabeledInput({ label, value, onChange, name }) {
  return (
    <div>
      <label htmlFor={name}>{label} </label>
      <input id={name} name={name} value={value} onChange={onChange} />
    </div>
  );
}

export default LabeledInput;

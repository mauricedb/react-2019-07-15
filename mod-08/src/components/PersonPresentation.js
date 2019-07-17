import React from "react";
import LabeledInput from "./LabeledInput";

function PersonPresentation({ firstName, lastName, onChange, onSave }) {
  return (
    <div>
      <LabeledInput
        label="Firstname:"
        value={firstName}
        onChange={onChange}
        name="firstName"
      />
      <LabeledInput
        label="Lastname:"
        value={lastName}
        onChange={onChange}
        name="lastName"
      />
      <div>
        <span>The fullname is: </span>
        <span>
          {firstName} {lastName}
        </span>
      </div>
      <div>
        <button onClick={() => onSave({ firstName, lastName })}>Save</button>
      </div>
    </div>
  );
}

export default PersonPresentation;

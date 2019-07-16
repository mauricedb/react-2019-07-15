import React from "react";

function Person() {
  const person = {
    firstName: "Maurice",
    lastName: "de Beijer"
  };

  return (
    <div>
      <div>
        <label>Firstname: </label>
        <input
          value={person.firstName}
          onChange={e => {
            console.log(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Lastname: </label>
        <input
          value={person.lastName}
          onChange={e => {
            console.log(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Person;

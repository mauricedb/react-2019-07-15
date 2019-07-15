import React from "react";

function Editor() {
  const inputRef = React.useRef();

  const [firstName, setFirstName] = React.useState("Maurice");
  return (
    <div id="editor" className="editor">
      <label
        onClick={() => {
          alert(inputRef.current.outerHTML);
          setFirstName("Jack");
        }}
      >
        Firstname:
      </label>
      <input
        ref={inputRef}
        value={firstName}
        onChange={e => {
          console.log(e.target.value);
          setFirstName(e.target.value);
        }}
      />
    </div>
  );
}

export default Editor;

import React from "react";
import imgSrc from "./cat.jpg";

import { Prompt } from "react-router-dom";

function Cat(props) {
  console.log(props);

  return (
    <div>
      <Prompt when={true} message="Are your sure?" />
      <h1>{props.match.params.name}</h1>
      <img src={imgSrc} alt="A cat" height="200" />
    </div>
  );
}

export default Cat;

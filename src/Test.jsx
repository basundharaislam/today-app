import React from "react";

import { useState } from "react";

function Test() {
  const [fruit, setFruit] = useState("Orange");
  const changeFruitName = () => {
    setFruit("Mango");
    //console.log("fruit is " + fruit);
  };

  return (
    <div>
      <h1>I am a fruit and my name is {fruit}</h1>
      <br />
      <h1>{fruit}</h1>
      <button onClick={changeFruitName}>Click to change the fruit name</button>
    </div>
  );
}

export default Test;

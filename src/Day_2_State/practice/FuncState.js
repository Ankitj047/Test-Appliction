import React from "react";
import { useState } from "react";

export default function FuncState() {
  const [count, setCount] = useState(0);

  function changecount() {
    setCount(count + 1);
  }

  function reducecount() {
      setCount (count-1)
  }
  return (
    <>
      <div>{count}</div>
      <button onClick={() => changecount()}>click me</button>
      <button onClick={()=>reducecount()}>reducecount</button>
    </>
  );
}

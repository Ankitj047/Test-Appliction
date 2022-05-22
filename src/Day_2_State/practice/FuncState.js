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

function reset()
{

  setCount (0)
}
  return (
    <>
      <div>{count}</div>
      <button onClick={() => changecount()}>Increment</button>
      <button onClick={()=>reducecount()}>decrement</button>
      <button onClick={()=>reset()} >reset</button>
    </>
  );
}

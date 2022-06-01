import React from 'react'

function ChildComponent(props) {
  console.log("I am render")
  return (
      <button onClick={() => props.clickHandler('Ankit')}>Say Hello</button>
  )
}

export default ChildComponent
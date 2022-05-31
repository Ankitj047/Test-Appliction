import React from 'react'

function ChildComponent(props) {
  return (
      <button onClick={() => props.clickHandler('Ankit')}>Say Hello</button>
  )
}

export default ChildComponent
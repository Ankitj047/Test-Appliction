import React, { useState } from 'react'

const StateExFunctional = () => {
    const [welcomeMessage, setwelcomeMessage] = useState("Hey We are learning React JS")
  
    function changeMessage() {
        setwelcomeMessage("We have Learned React JS")
    }
    return (
      <div>
          <h1>{welcomeMessage}</h1>
          <button onClick={changeMessage}>
              Click Me
          </button>
    </div>
  )
}

export default StateExFunctional
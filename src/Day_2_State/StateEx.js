import React, { Component } from 'react'

export default class StateEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          welcomeMessage: "Hey We are learning React JS",
      }
    }

    changeWelcomeMessage = () => {
        this.setState({
            welcomeMessage : "We have Learned React JS"
        }, {
            // apiCall()
        })
    }

    render() {
        const { welcomeMessage } = this.state
        
    return (
        <div>
            <h1>{welcomeMessage}</h1>
            <button onClick={() => this.changeWelcomeMessage()} >Click Me</button>
        </div>
    )
  }
}

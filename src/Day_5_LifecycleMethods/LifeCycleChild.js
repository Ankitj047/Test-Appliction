import React, { Component } from 'react'

export class LifeCycleChild extends Component {
    constructor(props) {
      super(props)
    
    }

    shouldComponentUpdate() {
        return true
    }

    render() {
        console.log('I am render');
    return (
      <div>LifeCycleChild</div>
    )
  }
}

export default LifeCycleChild
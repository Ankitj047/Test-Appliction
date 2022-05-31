import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.sayHello = this.helloMessage.bind(this)
    }

    helloMessage(name) {
        alert('Hello Message from ' + name)
    }

    render() {
    return (
        <div>
            <ChildComponent clickHandler={this.sayHello} />
      </div>
    )
  }
}

export default ParentComponent
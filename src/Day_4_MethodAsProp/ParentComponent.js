import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.sayHello = this.helloMessage.bind(this)

        this.state=({
            count:0
        })
        
    }

    apple(count) {
        this.setState ({
          // message: "hello come here"
          count: this.state.count+1
        })
      }

    helloMessage(name) {
        alert('Hello Message from ' + name)
    }

    render() {
    return (
        <div>
            <ChildComponent clickHandler={this.sayHello} />
            <div>{this.state.count}</div>
            <button onClick={()=>this.apple ()} >Increment</button>
      </div>
    )
  }
}

export default ParentComponent
import React, { Component } from 'react'
import LifeCycleChild from './LifeCycleChild'

export default class Lifecycle extends Component {

constructor (){
    super()

    this.state = ({
        count:0
    })
}
  
  apple(count) {
    this.setState({
      // message: "hello come here"
      count: this.state.count + 1
    })
  }

componentDidMount (){
    alert("hi i am")
}
  componentDidUpdate() {
    console.log('This is the state value after Update ==> ', this.state.count);
  }

  componentWillUnmount() {
    alert("I am unmounting ")

  }

  render() {
    return (
      <div>
        Lifecycle
        <div>{this.state.count}</div>
        <button onClick={() => this.apple()} >Increment</button>
        <LifeCycleChild />
      </div>
    )
  }
}

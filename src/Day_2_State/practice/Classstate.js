import React, { Component } from 'react'

export default class Classstate extends Component {
constructor () {
super ()
this.state = ({
  // message: "hi welcome"
  count : 0
})
}

apple(count) {
  this.setState ({
    // message: "hello come here"
    count: this.state.count+1
  })
}

decrement () {
  this.setState ({
    count: this.state.count-1
  })
}
    render() {



    return (
      <>
      <div>{this.state.count}</div>
      <button onClick={()=>this.apple ()} >click me</button>
      <button onClick={()=> this.decrement()} >decrement</button>
      </>
    )
  }
}

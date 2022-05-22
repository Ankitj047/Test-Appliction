import React, { Component } from 'react'

export default class PracticeConditionrendering extends Component {
constructor () {

    super()

    this.state ={
        count: 0
    }
}
  change () {
    this.setState ({
      // message: "hello come here"
      count: this.state.count+1
    })
  }



  render() {
    return (
    <>
   <div>{this.state.count %2==0 ? "even" : "odd"}</div> 
     <div>{this.state.count}</div>
      <button onClick={()=>this.change()} >click me</button>
      </>
    )
  }
}

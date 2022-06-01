import React, { Component } from 'react'

export default class Lifecycle extends Component {

constructor (){
    super()

    this.state = ({
        count:0
    })
}

componentDidMount (){
    alert("hi i am")
}

  render() {
    return (
      <div>Lifecycle</div>
    )
  }
}

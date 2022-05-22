import React, { Component } from 'react'

export default class BindingExample extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
        // this.incrementMethod = this.increment.bind(this)
    }

    // increment() {
    //     this.setState({
    //         count : this.state.count + 1
    //     })
    // }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                {/* Using Bind Keyword */}
                <button onClick={this.increment.bind(this)}>click me</button>
                {/* Binding With Arrow Function in Render */}
                <button onClick={() => this.increment()}>click me</button>
                {/* Binding In Constructor */}
                <button onClick={this.incrementMethod}>click me</button>
                {/* Arrow Fun in Class */}
                <button onClick={this.increment}>click me</button>
            </div>
        )
    }
}

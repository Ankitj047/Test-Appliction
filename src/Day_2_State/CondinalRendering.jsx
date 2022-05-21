import React, { Component } from 'react'

export default class CondinalRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }

    }

    updateCount = () => {
        console.log('clicked Called');
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    render() {
        const { count } = this.state
        return (
            <div>
                <h1>CondinalRendering</h1>
                {
                    (count %2 == 0) ? <h1>Even</h1> : <h1>Odd</h1>
                }
                <h1>{count}</h1>
                <button onClick={() => this.updateCount()}>Click Me</button>
            </div>
        )
    }
}

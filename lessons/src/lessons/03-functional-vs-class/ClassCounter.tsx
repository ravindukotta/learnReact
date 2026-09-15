import { Component } from 'react'

export default class ClassCounter extends Component {
  state = { count: 0 }

  componentDidMount() {
    console.log('class mounted')
  }

  render() {
    return (
      <>
        <p>Count: {this.state.count}</p>
        <button
          onClick={() => this.setState((state: { count: number }) => ({ count: state.count + 1 }))}
        >
          Increment
        </button>
      </>
    )
  }
}

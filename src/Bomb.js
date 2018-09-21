import React, { Component } from 'react'


class Bomb extends Component {

  constructor(props) {
    super()
    // console.log()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  handleTimerText = () => (this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`)

  render() {

    return (
      <div>{this.handleTimerText()}</div>
    )
  }
}

export default Bomb
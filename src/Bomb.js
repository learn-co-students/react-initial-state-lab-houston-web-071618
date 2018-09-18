// your Bomb code here!
import React, { Component } from 'react'

  class Bomb extends Component {
    constructor(props) {
      super(props)
      this.state = {
        secondsLeft: this.props.initialCount
      }
    }

    render() {
      const countDown = this.state.secondsLeft
      let textToRender
      if (countDown == 0) {
        textToRender = "Boom!"
      } else {
        textToRender = countDown + " seconds left before I go boom!"
      }
      return (
        <div className='Bomb'>
          {textToRender}
        </div>
      )
    }
  }

export default Bomb;

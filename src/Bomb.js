// your Bomb code here!
import React, { Component } from 'react'
  class Bomb extends Component {
    constructor(props) {
      super(props)

      this.state = {
        secondsLeft: this.props.initialCount
      }
    }

      updateTimer = () => {
        this.setState({
          secondsLeft: this.state.secondsLeft - 1
        })

      }

      componentDidMount = () => {
        setInterval(
          this.updateTimer
          ,1000);
        }


      render() {
      return (
        <div className='Bomb'>
         {this.state.secondsLeft === 0 ? "Boom!" : this.state.secondsLeft + " seconds left before I go boom!" }
        </div>
      )
    }
  }

export default Bomb;

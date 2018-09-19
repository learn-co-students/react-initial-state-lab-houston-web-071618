// your Bomb code here!
import React, { Component } from 'react';
class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {secondsLeft: props.initialCount}
  }

  render(){
    const timeLeft = this.state.secondsLeft
    if ( timeLeft == 0 ) {
      return (
        <div>
          Boom!
        </div>)}
    else {return (
      <div>
        {timeLeft} seconds left before I go boom!
      </div>
    )}
  }
}

export default Bomb
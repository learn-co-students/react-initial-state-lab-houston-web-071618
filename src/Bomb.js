// your Bomb code here!
// your ImageSlider code here!
import React, { Component } from 'react';


export default class Bomb extends Component {

  constructor(props) {
    super(props)
    // ...define initial state with a key of 'color' set to the 'value' prop
    // currentSlideIndex that starts at 0
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

   render() {

       if (this.state.secondsLeft === 0){
         return (
           <div>
            Boom!
           </div>
       )
       }
       else{
         return(
           <div>
            {this.state.secondsLeft} seconds left before I go boom!
           </div>
         )
       }
   }

}

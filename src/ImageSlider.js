// your ImageSlider code here!
import React, { Component } from 'react';


export default class ImageSlider extends Component {

  constructor(props) {
    super(props)
    // ...define initial state with a key of 'color' set to the 'value' prop
    // currentSlideIndex that starts at 0
    this.state = {
      currentSlideIndex: 0
    }
  }

   render() {
     return (
       <div>
        I am on slide {this.state.currentSlideIndex}
       </div>
     )
   }

}

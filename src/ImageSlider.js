import React, {Component} from 'react';

export default class ImageSlider extends Component{

  constructor(){
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }//end constructor

render(){
  return(
    <h1>I am on slide {this.state.currentSlideIndex}</h1>
  )
}//end render

}//end class ImageSlider

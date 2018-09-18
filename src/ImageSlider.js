import React, { Component } from 'react'

class ImageSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSlideIndex: 0
    }
  }

  render () {
    return (
      <div className="image-slider">I am on slide {this.state.currentSlideIndex}</div>
    )
  }
}

export default ImageSlider

import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Slider from "react-slick"
import debounce from "debounce"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./slide.scss"
export default class WithDebounce extends Component {
  constructor(props) {
    super(props)
    this.onWindowResized = debounce(this.onWindowResized.bind(this), 700)
  }

  componentDidMount(){
    window.addEventListener('resize', this.onWindowResized);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResized);
  }

  onWindowResized() {
    this.slider.slickNext()
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings} ref={s => this.slider = s}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </Slider>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <WithDebounce />,
    document.body.appendChild(document.createElement('div')),
  )
})

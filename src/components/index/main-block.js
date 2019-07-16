import React, { Component } from 'react';
import styled from 'styled-components';

import { Power1, Linear, TweenMax, TimelineMax } from 'gsap'

import backgroundFirst from './../../assets/images/first.jpg'
import backgroundSecond from './../../assets/images/second.jpg'

const MainBlockView = styled.div`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  &.first {
    background-size: cover !important;
    background-position: center center !important;
    background: url(${backgroundFirst});
  }  
  &.second {
    background-size: cover !important;
    background-position: center center !important;
    background: url(${backgroundSecond});
  }
  .main-block-cover {
    background: #fbf9f3;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
    transform-origin: 0 0;
  }
  .main-list {
    position: absolute;
    bottom: 50px;
    right: 120px;
    padding: 0px;
    li {
      font-size: 24px;
      text-align: right;
      cursor: pointer;
      color: #323846;
      span { 
        opacity: 0;
        transition: opacity 100ms linear;
      }
      &:hover {
        span {opacity: 1}
      }
    }
  }
`


class MainBlock extends Component {

  componentDidMount(){
    this.animation();
  }

  animation = () => {
    const tl = new TimelineMax()
    tl
    .fromTo('.main-block-cover', .5, { scaleX: 0 }, { scaleX: 1, ease: Power1.easeIn}, '+=0.9')
    .to('.first', 0.2,{className:"+=second"})
    .to('.second', 0.1,{className:"+=first"})
    .fromTo('.main-block-cover', .5, { scaleY: 1 }, { scaleY: 0, ease: Power1.easeIn})
    .staggerFromTo('.main-list li', .6, {y: 20, autoAlpha: 0 },{y: 0, autoAlpha: 1 }, 0.2)
  }

  render(){
    return (
      <MainBlockView className="first">
        <div className="main-block-cover"></div>
        <ul className="main-list">
          <li><span>[</span> Projects <span>]</span></li>
          <li><span>[</span> Places <span>]</span></li>
          <li><span>[</span> Moments <span>]</span></li>
        </ul>
      </MainBlockView>
    )
  }
}

export default MainBlock;
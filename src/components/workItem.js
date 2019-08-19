import React, { Component } from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components'

import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min';
import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';
import { TweenMax, Linear, Power1 } from 'gsap';

const WorkItemView = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: ${ props => props.top % 2 ? 'flex-start' : 'flex-end' };
  border: 1px solid green;

  .work-container {
    border: 1px solid red;
    width: 600px;
    height: 900px;
    position: absolute;
    max-height:100%;
    overflow:hidden;
    border: 1px solid blue;
  
    .title {
      z-index: 5;
      position: absolute;
      transform: rotate(-90deg);
      width: 300px;
      bottom: 140px;
      right: -175px;
      font-size: 20px;
      letter-spacing: 1.2px;
      font-weight: lighter;
      color: #666;
      text-transform: uppercase
    }
    .image-wrapper {
      z-index: 6;
      top: 0;
      position: relative;
      max-width: 100%;
      height: 800px;

      .image {
        top: -150px;
        position: relative;
        height: 1100px;
        background-size: cover !important;
        background-repeat: no-repeat !important;
        background-position: center center !important;
      }
    }
  }

 
  @media(max-width: 1300px){
    height: 900px;
    .work-container {
      height: 700px !important;
      width: 500px !important;
      background: grey;
      .image-wrapper { 
        height: 900px;
        .image {
          height: 900px;
        } 
      }
    }
  }


  @media(max-width: 768px){}
  @media(max-width: 480px){
    height: 700px;
    .work-container {
      height: 500px !important;
      width: 350px !important;
      background: grey;
      .image-wrapper { 
        height: 500px;
        .image {
          height: 650px;
        } 
      }
    }
  }

`

class WorkItem extends Component {


  componentDidMount(){
    this.titleAnimation()
    this.imageAnimation()
    this.imageWrapperAnimation()
  }

  titleAnimation(){
    const { work, top } = this.props;

    const controller = new ScrollMagic.Controller()
    const tween = TweenMax.fromTo(`.image-${work.type}-${top} .title`, 1, { autoAlpha: 0, x: -40}, {autoAlpha: 1, x: 0, ease: Power1.easeIn })
    
    new ScrollMagic.Scene({
      triggerElement: `.work-${work.type}-${top}`,
      triggerHook: .35,
      duration: '25%'
    })
    .setTween(tween)
    .addTo(controller)
  }

  imageAnimation(){
    const { work, top } = this.props;

    const controller = new ScrollMagic.Controller()
    const tween = TweenMax.fromTo(`.image-${work.type}-${top}`, 1, {y: 0}, {y: 140, ease: Linear.easeNone })
    
    new ScrollMagic.Scene({
      triggerElement: `.wrapper-${work.type}-${top}`,
      triggerHook: .1,
      duration: '110%'
    })
    .setTween(tween)
    .addTo(controller)
  }

  imageWrapperAnimation(){
    const { work, top } = this.props;

    const controller = new ScrollMagic.Controller()
    const tween = TweenMax.fromTo(`.work-${work.type}-${top}`, 1, {y: 0}, {y:  top < 4  ? (-75 * top) : (-200 + (top * -10)) , ease: Power1.easeIn })
    
    new ScrollMagic.Scene({
      triggerElement: `.work-${work.type}-${top}`,
      triggerHook: .9,
      duration: '90%'
    })
    .setTween(tween)
    .addTo(controller)
  }

  render(){
    const { work, top } = this.props;
    return(
      <WorkItemView top={top}>
          <div className={`work-container work-${work.type}-${top}`}>
            <Link to={`${work.path}`} className={`image-wrapper wrapper-${work.type}-${top}`}>
              <div className={`image image-${work.type}-${top}`} style={{'background': `url(${work.thumbnail.childImageSharp.fluid.src})`}}>
                <span to={`${work.path}`} className="title">{ work.title }</span>
              </div>
            </Link>
          </div>
      </WorkItemView>
    )
  }
}

export default WorkItem;
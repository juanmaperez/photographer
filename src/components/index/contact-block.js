import React, { Component } from 'react';
import styled from 'styled-components';

import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min';
import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';
import { TweenMax, Power1 } from 'gsap';

const ContactBlockView = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fbf9f3;
  position: relative;
  .cover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background: #B7C8Cb;
    width: 100%;
    height: 100%;
  }
  .content {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background: transparent; 
    display: flex;
    flex: 2;
    flex-direction: row;
    width: 100%;
    height: 100%;

    .left, .right {
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
    }
    .left {
      flex: .75;
      justify-content: center;
      .month, .year { 
        color: #fff;
        font-size: 400px;
        font-family: 'Mfred';
        text-transform: uppercase;
        text-align: right;
        width: 100%;
        display:block;
      }
    }
    .right {
      flex: 1.25;
      justify-content: center;
      padding: 50px;
      color: #fff;
      font-size: 32px;
      line-height: 1.4;
      .top {
        letter-spacing: 1px;
        padding: 20px 0px;
        border-bottom: 8px solid #fff; 
      }
      .bottom {
        padding: 20px 0px;
        span { padding: 0px 10px;}
        i {
          opacity: :.7; 
          font-style: normal;
        }
      }
    }

  }
` 

class ContactBlock extends Component {

  componentDidMount(){
    this.coverAnimation();
    this.contentAnimation();
  }

  coverAnimation = () => { 
      const controller = new ScrollMagic.Controller()
      const tween = TweenMax.fromTo(`.contact-block .cover`, 1, {  scaleY: 0}, { scaleY: 1, ease: Power1.easeIn })
      
      new ScrollMagic.Scene({
        triggerElement: `.contact-block`,
        triggerHook: .9,
        duration: '70%'
      })
      .setTween(tween)
      .addTo(controller)
  }

  contentAnimation = () => {
    const controller = new ScrollMagic.Controller()
    const tween = TweenMax.fromTo(`.contact-block .content`, 1, { y: 100, autoAlpha: 0}, { y: 0, autoAlpha: 1, ease: Power1.easeIn })
    
    new ScrollMagic.Scene({
      triggerElement: `.contact-block`,
      triggerHook: .2,
      duration: '20%'
    })
    .setTween(tween)
    .addTo(controller)
  } 

  render(){
    return(
      <ContactBlockView className="contact-block">
        <div className="cover"></div>
        <div className="content">
          <div className="left">
            <span className="month">Sept</span>
            <span className="year">'19</span>
          </div>
          <div className="right">
            <div className="top">
              <p>I'm available for freelance works.</p>
              <p>Say hello hi@ladymadrid.com</p>
            </div>
            <div className="bottom">
              <span>Be </span> <i>|</i> <span> Ig </span> <i>|</i> <span> Tw </span>  
            </div>
          </div>
        </div>
      </ContactBlockView>
    )
  }
}

export default ContactBlock;
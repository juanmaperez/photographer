import React, {Component} from 'react'
import styled from 'styled-components'

import { Controller, Scene } from 'react-scrollmagic';
import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min';
import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';

import Image from './../image'
import girl from './../../assets/images/girl.jpg'
import { TweenMax } from 'gsap';

const AboutBlockView = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  background: #fbf9f3;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .about-wrapper {
    background: #fbf9f3;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-clip-path: inset(0 0 0 0);
    clip-path: inset(0 0 0 0);
    .image {
      position: fixed;
      right: 120px;
      top: 30px;
      width: 30vw;
      transition: opacity 300ms linear;
      &.fade-in {
      }
      img {
        max-width: 100%;
      }
    }
    .intro-text {
      position: relative;
      z-index: 10;
      width: 100%;
      font-size: 7vw;
      color: #323846;
      line-height: 1.2;
      padding: 100vh 120px 50px;
      box-sizing: border-box;
      p {
        mix-blend-mode: difference;
        margin-bottom: 100px;
        opacity: 0;
        transition: opacity 600ms linear;
        &.fade-in {
          opacity: 1;
        }
   
        strong, a {
          color: #323846;
          -webkit-text-stroke: 0.0002em #323846;
          &:hover {text-decoration: underline}
        }
      }
    }
  }



  @media(max-width: 1080px) {
    padding-top:200px;
    min-height: 400px;
    .intro-text {
      padding: 20px;
      font-size: 9vw;
      p {
        margin-bottom: 80px;
      }
    }
  }
  @media(max-width: 768px) {
    padding-top:200px;
    min-height: 400px;
    .intro-text {
      font-size: 9vw;
      p {
        margin-bottom: 50px;
      }
    }
  }
  @media(max-width: 480px) {
    padding-top:120px;
    min-height: ${props => props.height/1.2}px;
    .intro-text {
      padding:10px;
      -webkit-text-stroke: 0px #323846;
      font-size: 9vw;
      p {
        margin-bottom: 10px;
        strong {
          color: #323846;
          -webkit-text-stroke: 0px #323846;
        }
      }
  }
`

class AboutBlock extends Component {

  componentDidMount(){
    this.showImage()
  }



  showImage = () => {
    const controller = new ScrollMagic.Controller()
    const tween = TweenMax.fromTo('.image', 0.6, {autoAlpha: 0, x: 60}, {autoAlpha: 1, x: 0})

    new ScrollMagic.Scene({
      triggerElement: '.about-wrapper',
      triggerHook: .1,
      duration: '10%'
    })
    .setTween(tween)
    .addTo(controller)
  }

  render(){
    const { height } = this.props;
    return (
      <AboutBlockView height={height}>
        <div className="about-wrapper">
    
          <div className="image">
            <Image imageUrl={ girl } title="lady madrid" />
          </div>
          
          <div className="intro-text">
            <Controller>
              <Scene classToggle={'fade-in'} triggerHook={0.80}>
                <p>I'm <span>Lady Madrid </span>, a photographer from Seville and based in London looking for new experiences.</p>
              </Scene>
            </Controller>
            <Controller>
              <Scene classToggle={'fade-in'} triggerHook={0.80}>
                <p>I've been my whole life capturing moments into my camera, some funny, some sad and some really special.</p>
              </Scene>
            </Controller>    
            <Controller>
              <Scene classToggle={'fade-in'} triggerHook={0.80}>
                <p>It's this site where I chose to publicy my work with all the people who love photography as much as me.</p> 
              </Scene>
            </Controller>    
            <Controller>
              <Scene classToggle={'fade-in'} triggerHook={0.80}>
                <p>Also you can find me in social medias like <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ladymadrid">Instagram, Behance or Twitter.</a>.</p>
              </Scene>
            </Controller>  
          </div> 
        </div>
      </AboutBlockView>
    )
  }
} 

export default AboutBlock;
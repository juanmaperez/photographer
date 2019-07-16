import React from 'react'
import styled from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic';

const london ="https://www.google.com/maps/place/London/@51.5287718,-0.2416815,11z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5073509!4d-0.1277583"


const AboutBlockView = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  background: linear-gradient(#F0D0D5,#fbf9f3);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .intro-text {
    width: 100%;
    font-size: 8vw;
    color: #323846;
    line-height: 1.2;
    padding: 20px 80px;
    box-sizing: border-box;
    font-weight: bolder;
    -webkit-text-stroke: 1px #323846;
    p {
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

const AboutBlock = ({height}) => (
  <AboutBlockView height={height}>
    <div className="intro-text">
      <Controller>
        <Scene classToggle={'fade-in'} triggerHook={0.80}>
          <p>I'm <span>Juanma Pérez </span>, a javascript <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/juanmaperezvargas/">Front End Developer</a> from Seville.</p>
      
        </Scene>
      </Controller>
      <Controller>
        <Scene classToggle={'fade-in'} triggerHook={0.80}>
          <p>I grew up professionally in Barcelona and I moved to <a target="_blank" rel="noopener noreferrer" href={london}>London</a> in 2018.</p>
        </Scene>
      </Controller>    
      <Controller>
        <Scene classToggle={'fade-in'} triggerHook={0.80}>
          <p>Nowadays, I work at <a target="_blank" rel="noopener noreferrer" href="https://colossusbets.com/">ColossusBets</a> where I'm continuously improving my skills in web development and UX.</p> 
        </Scene>
      </Controller>    
      <Controller>
        <Scene classToggle={'fade-in'} triggerHook={0.80}>
          <p>I also love music, books, films, sports, and <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/worldoftypographies/">typography</a>.</p>
        </Scene>
      </Controller>           
    </div>
  </AboutBlockView>
)

export default AboutBlock;
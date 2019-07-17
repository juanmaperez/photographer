import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from 'styled-components';
import { Power1, TweenMax } from 'gsap';
import "./../styles/mixins.scss"
import "./../styles/main.css"



const HeaderView = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 120px 20px;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  h1 {
    cursor: pointer;
    a {
      font-family: 'MFred';
      letter-spacing: 1px;
      font-size: 24px;
      position: relative;
      text-transform: uppercase;
      color: #323846;
    }
  }
  nav {
    margin-top: 7px;
    a { 
      font-family: 'Questrial';
      font-size: 24px;
      cursor: pointer;
      text-transform: capitalize;
      color: #323846;
      span { 
        transition: opacity 100ms linear;
      }
      &:hover {
        .text {text-decoration: line-through}
      }
    }
  }
`

class Header extends Component {

  componentDidMount(){
    this.animation();
  }
  
  animation = () => {
    const header = document.querySelector('header');
    TweenMax.fromTo( 
      header, 
      .5, 
      {autoAlpha: 0, y: -30 }, 
      {autoAlpha: 1, y: 0 , ease: Power1.easeOut})
  }
  
  render() {
    const { siteTitle } = this.props; 
    
    return (
      <HeaderView>
        <h1 className="web-title" data-text="Photographer" style={{ margin: 0 }}>
          <Link data-text="Photographer" to="/"> {siteTitle} </Link>
        </h1>
        <nav>
          <Link to="/contact"><span>[</span> <span className="text">Contact</span> <span>]</span> </Link>
        </nav>
      </HeaderView>
    )
  }
  
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
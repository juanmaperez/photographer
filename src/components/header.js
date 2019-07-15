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
  padding: 15px 30px 10px;
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
    }
  }
  nav {
    margin-top: 7px;
    a { font-size: 16px }
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
        <h1 className="web-title" data-text="Rocio Corona" style={{ margin: 0 }}>
          <Link data-text="Rocio Corona" to="/"> {siteTitle} </Link>
        </h1>
        <nav>
          <Link to="/contact"> contact </Link>
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
import React, { Component } from 'react';
import styled from 'styled-components';

const WorksBlockView = styled.div`
  position: relative;
  border: 1px solid red;
  width: 100vw;
  min-height: 100vh;
  background: #fbf9f3;

  .section-title {
    position: absolute;
    font-size: 20vw;
    top: 30px;
    left: 120px;
    text-transform: uppercase;
    font-family: 'MFred';
    color: #B7C8Cb;
  }
`

const WorksBlock = ({type, works}) => (
  <WorksBlockView>
    <h2 className="section-title">{ type }</h2>


  </WorksBlockView>
)

export default WorksBlock;
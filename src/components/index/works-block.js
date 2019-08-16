import React from 'react';
import styled from 'styled-components';

import WorkItem from './../workItem';

const WorksBlockView = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background: #fbf9f3;
  padding: 300px 200px 100px;
  box-sizing: border-box;
  overflow: hidden;

  .section-title {
    position: absolute;
    font-size: 20vw;
    top: 160px;
    left: 120px;
    text-transform: uppercase;
    font-family: 'MFred';
    color: #B7C8Cb;
    z-index: 10;
  }

  @media(max-width: 1300px){
    padding: 300px 120px 100px;
  }
`

const WorksBlock = ({type, works}) => (
  <WorksBlockView className="block-works">
    <h2 className="section-title">{ type }</h2>
    { works.map( (work, index) => <WorkItem key={index} top={index} work={ work } />)}
  </WorksBlockView>
)


export default WorksBlock;
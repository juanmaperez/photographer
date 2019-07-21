import React from 'react';
import styled from 'styled-components';

const WorksBlockView = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background: #fbf9f3;
  padding-top: 150px;

  .section-title {
    position: absolute;
    font-size: 20vw;
    top: 160px;
    left: 120px;
    text-transform: uppercase;
    font-family: 'MFred';
    color: #B7C8Cb;
  }
`

const WorksBlock = ({type, works}) => (
  <WorksBlockView className="works-block">
    <h2 className="section-title">{ type }</h2>


  </WorksBlockView>
)


export default WorksBlock;
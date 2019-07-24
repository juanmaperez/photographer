import React, { Component } from 'react';
import styled from 'styled-components'

const WorkItemView = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: ${ props => props.top % 2 ? 'flex-start' : 'flex-end' };

  .work-container {
    width: 27vw;
    position: absolute;
    max-height:100%;
  
    .title {
      position: absolute;
      transform: rotate(-90deg);
      width: 200px;
      bottom: 95px;
      right: -115px;
    }
    .image-wrapper {
      top: 0;
      position: relative;
      max-width: 100%;
      height: 80vh;
      overflow: hidden;
      background-size: cover !important;
      background-repeat: no-repeat !important;
      background-position: center center !important;
    
      img {
        max-width: 100%;
        height: auto;
      }
    }
  
  }

`

class WorkItem extends Component {

  render(){
    const { work, top } = this.props;
    console.log(work)
    return(
      <WorkItemView top={top}>
        <div className="work-container">
          <div className="image-wrapper" style={{'background': `url(${work.thumbnail.childImageSharp.fluid.src})`}}>
            {/* <Image imageUrl={  } title={ work.title } /> */}
          </div>
          <span className="title">{ work.title }</span>
        </div>
      </WorkItemView>
    )
  }
}

export default WorkItem;
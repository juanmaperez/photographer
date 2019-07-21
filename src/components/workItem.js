import React, { Component } from 'react';
import styled from 'styled-components'

import Image from './image'; 

const WorkItemView = styled.div`
  width: 100vw;
  height: 40vh;

`

class WorkItem extends Component {

  render(){
    const { work } = this.props;

    return(
      <WorkItemView>
        <div className="work-container">
          <Image imageUrl={ work.thumbnail } title={ work.title } />
        </div>
      </WorkItemView>
    )
  }
}
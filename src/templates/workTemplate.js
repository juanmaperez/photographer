import React from 'react';
import { graphql } from 'gatsby';
import Layout from './../layouts/layout'
import styled from 'styled-components'

import Image from './../components/image';

const WorkTemplateView = styled.div`
  width: 60%;
  margin: 0px auto;
  padding: 120px 0px;
  h1 {
    text-transform: uppercase;
    font-size: 140px;
    margin-bottom: 30px;
  }
  .description {
    font-size: 18px;
    font-weight: lighter;
    line-height: 1.4;
    margin-bottom: 60px;
  }
  .work-image {
    margin-bottom: 90px;
    img {
      max-width: 100%;
      margin-bottom: 10px;
    }
    h3 { 
      text-transform: uppercase;
      font-size: 20px;
      letter-spacing: 1px;
    }
  }
`

const WorkTemplate = ({ data }) => {
  const { markdownRemark : work } = data;
  const { frontmatter, html } = work; 
  return (
    <Layout>
      <WorkTemplateView>
        <h1>{ frontmatter.title }</h1>
        <div className="description">
          <p>{ frontmatter.description }</p>
        </div>
        { frontmatter.images.map( element => <div className="work-image">
          <Image imageUrl={element.image.childImageSharp.fluid.src} title={element.title}/>
          <h3 >{ element.title }</h3>
        </div>)}
      </WorkTemplateView>
    </Layout>
  )
}

export const WorkQuery = graphql`
  query WorkByPath($path: String!) {
    markdownRemark ( frontmatter: { path: { eq: $path }}) {
      html
      id
      frontmatter {
        date
        path
        title
        description
        thumbnail {
          childImageSharp {
              fluid(maxWidth: 2500) {
                  src
              }
          }
        }
        images {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 1000) {
                  src
              }
            }
          }
        }
      }
    }
  }
`


export default WorkTemplate;

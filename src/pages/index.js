import React from "react";
import { graphql } from 'gatsby'

import Layout from "../layouts/layout"
import SEO from "../components/seo"

import MainBlock from '../components/index/main-block'
import AboutBlock from '../components/index/about-block'
import WorksBlock from '../components/index/works-block'
import ContactBlock from '../components/index/contact-block'

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const works = edges.map(work => work.node.frontmatter)
  const workTypes = works.reduce((workTypes, item) => {
    if(!workTypes[item.type]){
      workTypes[item.type] = { type: item.type, works: [item]}
    } else {
      workTypes[item.type].works = [...workTypes[item.type].works, item]
    }
    return workTypes
  }, {})

  return (
    <Layout>
      <SEO title="Home" />
      <MainBlock />
      <AboutBlock />
      { Object.keys(workTypes).map(type => <WorksBlock 
                                              key={workTypes[type].type} 
                                              type={workTypes[type].type} 
                                              works={workTypes[type].works} />)}
      <ContactBlock />
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark (
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            type
            thumbnail {
              childImageSharp {
                  fluid(maxWidth: 800) {
                      src
                  }
              }
            }
          }
        }
      }
    }
  }
`


export default IndexPage

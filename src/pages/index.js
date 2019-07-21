import React from "react";
import Layout from "../layouts/layout"
import SEO from "../components/seo"

import MainBlock from '../components/index/main-block'
import AboutBlock from '../components/index/about-block'
import WorksBlock from '../components/index/works-block'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainBlock />
    <AboutBlock />
    <WorksBlock type="Places" />
  </Layout>
)

export default IndexPage

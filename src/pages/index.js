import React from "react";
import Layout from "../layouts/layout"
import SEO from "../components/seo"

import MainBlock from '../components/index/main-block'
import AboutBlock from '../components/index/about-block'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainBlock />
    <AboutBlock />
  </Layout>
)

export default IndexPage

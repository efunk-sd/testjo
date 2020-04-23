import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello you!</h1>
    <p>Welcome to my Gatsby site.</p>
    <p>Now see what I've build here.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <div>
      <Link to="/about">About</Link>
    </div>
    <div>
      <Link to="/contact">Contact</Link>
    </div>
  </Layout>
)

export default IndexPage

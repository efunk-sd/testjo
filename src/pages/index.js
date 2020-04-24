import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hallo Schatz &#128536;</h1>
    <p>Ich liebe dich <span style={{color: 'red'}}>&#9829;</span>.</p>
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

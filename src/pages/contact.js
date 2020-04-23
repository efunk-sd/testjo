import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"

const SecondPage = () => (
  <Layout>
    <SEO title="test about" />
    <Container>
    <h1>Contact</h1>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default SecondPage

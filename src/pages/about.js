import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="test about" />
    <div className="container">
    <h1>About us</h1>
    <p>Welcome to about us</p>
    <Link to="/">Go back to the homepage</Link>
    </div>
    <p>
    <Link to="/contact">Go to contact</Link>
    </p>
  </Layout>
)

export default SecondPage

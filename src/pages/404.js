import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404 - NOT FOUND</h1>
    <p>We haven't made this page yet! <span role="img" aria-label="wrench emoji">🔧</span> But we're working on it!</p>
  </Layout>
)

export default NotFoundPage

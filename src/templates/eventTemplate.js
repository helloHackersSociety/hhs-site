import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
        <SEO title={frontmatter.title}/>
        <div className="blog-post-container" style={{padding:`2rem 0`}}>
        <div className="blog-post">
            <h1 style={{fontSize:`3.5rem`}}>{frontmatter.title}</h1>
            <p>{frontmatter.desc} - {frontmatter.date}</p>
            <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        desc
        title
      }
    }
  }
`
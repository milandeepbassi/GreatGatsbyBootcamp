import Layout from "../components/layout"
import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date
      }
      html
      timeToRead
    }
  }
`

const BlogMarkdown = (props) => {
  return (
    <Layout>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <p>{props.data.markdownRemark.frontmatter.date} | {props.data.markdownRemark.timeToRead}</p>
        <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
    </Layout>
  )
}

export default BlogMarkdown

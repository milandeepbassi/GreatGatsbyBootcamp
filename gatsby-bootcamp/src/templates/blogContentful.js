import Layout from "../components/layout"
import React from "react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { graphql } from "gatsby"

export const query = graphql`
  query($id: String!){
    contentfulBlogPost(id: {eq: $id}) {
      title
      publishedDate(formatString: "Do, MMMM, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url}/>
      }
    }
  }

  return (
    <Layout>
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p>{props.data.contentfulBlogPost.publishedDate}</p>
        {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
    </Layout>
  )
}

export default Blog

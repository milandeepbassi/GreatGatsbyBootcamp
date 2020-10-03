import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import React from 'react'

const BlogPage = () => {

  const data = useStaticQuery(graphql`
  query{
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
            date
          }
        }
      }
    }
  }
`)

  return (
    <Layout>
      <h2>This is the blog page.</h2>
      <ol>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
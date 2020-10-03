import { Link, graphql, useStaticQuery } from 'gatsby'

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
          fields{
            slug
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
              <h2>
                <Link to={edge.node.fields.slug}>
                  {edge.node.frontmatter.title}
                </Link>
                </h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
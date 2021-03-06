import { Link, graphql, useStaticQuery } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'
import React from 'react'
import blogStyle from '../styles/blog.module.scss'

const MarkdownBlog = () => {

  const data = useStaticQuery(graphql`
  query{
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
            date
          }
          excerpt
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
      <Head title="Markdown Blog" />
      <h2>Markdown Blog Posts</h2>
      <ol className={blogStyle.posts}>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li className={blogStyle.postsContent}>
              <h2>
                <Link to={edge.node.fields.slug}>
                  {edge.node.frontmatter.title}
                </Link>
              </h2>
              <p>{edge.node.frontmatter.date}</p>
              <p>{edge.node.excerpt}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default MarkdownBlog
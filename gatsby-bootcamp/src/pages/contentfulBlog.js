import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import React from 'react'
import blogStyle from '../styles/blog.module.scss'

const ContentfulBlog = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(fromNow: true)
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h2>Contentful Blog Posts</h2>
      <ol className={blogStyle.posts}>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li className={blogStyle.postsContent}>
              <h2>
                <Link to={edge.node.slug}>
                  {edge.node.title}
                </Link>
              </h2>
              <p>{edge.node.publishedDate}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default ContentfulBlog
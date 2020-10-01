import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'

const BlogPage = () => {
  return (
    <div>
      <h1>Milan's Great Gatsby Bootcamp Site</h1>
      <h2>This is the blog page.</h2>
      <p><Link to="/">Home Page</Link></p>
      <p><Link to="/blog">Blog Page</Link></p>
      <p><Link to="/about">About Page</Link></p>
      <p><Link to="/contact">Contact Page</Link></p>
      <Footer/>
    </div>
  )
}

export default BlogPage
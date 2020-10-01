import React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <div>
      <h1>Milan's Great Gatsby Bootcamp Site</h1>
      <h2>Welcome to my new site.</h2>
      <p><Link to="/">Home Page</Link></p>
      <p><Link to="/blog">Blog Page</Link></p>
      <p><Link to="/about">About Page</Link></p>
      <p><Link to="/contact">Contact Page</Link></p>
    </div>
  )
}

export default IndexPage
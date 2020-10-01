import React from 'react'
import { Link } from 'gatsby'

const ContactPage = () => {
  return (
    <div>
      <h1>Milan's Great Gatsby Bootcamp Site</h1>
      <h2>This is the contact page.</h2>
      <p><a href="https://www.twitter.com/milanbassi" target="_blank">Connect on Twitter</a></p>
      <p><Link to="/">Home Page</Link></p>
      <p><Link to="/blog">Blog Page</Link></p>
      <p><Link to="/about">About Page</Link></p>
      <p><Link to="/contact">Contact Page</Link></p>
    </div>
  )
}

export default ContactPage
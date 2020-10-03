import Head from '../components/head'
import Layout from '../components/layout'
import React from 'react'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h2>This is the contact page.</h2>
      <p><a href="https://www.twitter.com/milanbassi" target="_blank" rel="noreferrer">Connect on Twitter</a></p>
    </Layout>
  )
}

export default ContactPage
import Head from '../components/head'
import Layout from '../components/layout'
import React from 'react'

const NotFound = () => {
  return (
    <Layout>
        <Head title="404" />   
      <h2>This page is not found.</h2>
    </Layout>
  )
}

export default NotFound
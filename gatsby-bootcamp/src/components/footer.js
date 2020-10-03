import { graphql, useStaticQuery } from 'gatsby'

import React from 'react'
import footerStyle from '../styles/footer.module.scss'

const Footer = () => {

    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
    
    return (
        <footer className={footerStyle.footer}>
            <p>Created by {data.site.siteMetadata.author} © 2020</p>
        </footer>
    )
}

export default Footer
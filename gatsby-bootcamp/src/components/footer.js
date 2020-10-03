import { graphql, useStaticQuery } from 'gatsby'

import React from 'react'

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
        <div>
            <p>Created by {data.site.siteMetadata.author} © 2020</p>
        </div>
    )
}

export default Footer
import { Link, graphql, useStaticQuery } from 'gatsby'

import React from 'react'
import headerStyle from "../styles/header.module.scss"

const Header = () => {
    
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    
    return (
        <header className={headerStyle.header}>
            <h1>
                <Link to="/" className={headerStyle.title}>
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={headerStyle.navList}>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/">Home Page</Link>
                    </li>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/markdownBlog">Markdown Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/contentfulBlog">Contentful Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/about">About Page</Link>
                    </li>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/contact">Contact Page</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
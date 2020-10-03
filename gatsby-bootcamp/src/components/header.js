import { Link } from 'gatsby'
import React from 'react'
import headerStyle from "../styles/header.module.scss"

const Header = () => {
    return (
        <header className={headerStyle.header}>
            <h1>
                <Link to="/" className={headerStyle.title}>
                    Milandeep Bassi Logo
                </Link>
            </h1>
            <nav>
                <ul className={headerStyle.navList}>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/">Home Page</Link>
                    </li>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/blog">Blog Page</Link>
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
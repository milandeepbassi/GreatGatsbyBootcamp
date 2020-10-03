import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <h1>Milan's Great Gatsby Bootcamp Site</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home Page</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog Page</Link>
                    </li>
                    <li>
                        <Link to="/about">About Page</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Page</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
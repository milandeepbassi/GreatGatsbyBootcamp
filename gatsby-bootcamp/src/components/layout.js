import '../styles/index.scss'

import Footer from '../components/footer'
import Header from '../components/header'
import React from 'react'
import layoutStyle from '../styles/layout.module.scss'

const DefaultLayout = (props) => {
    return (
        <div className={layoutStyle.container}>
            <div className={layoutStyle.content}>
                <Header/>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default DefaultLayout
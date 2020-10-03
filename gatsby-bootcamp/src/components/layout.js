import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/index.scss'

const DefaultLayout = (props) => {
    return (
        <div>
            <Header/>
                {props.children}
            <Footer/>
        </div>
    )
}

export default DefaultLayout
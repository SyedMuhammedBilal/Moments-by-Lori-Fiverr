import React from 'react'
import '../components/App.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import BlogCards from '../components/BlogCards'

function blogs() {
    return (
        <div>
            <Navbar />
            <h1 className='products'>Cool Blogs</h1>
            <br />
            <h1>Here's some Cool Blogs</h1>
            <br />
            <br />
            <BlogCards />
            <Footer />
        </div>
    )
};

export default blogs

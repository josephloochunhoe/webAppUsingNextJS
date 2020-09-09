import React, { Component } from 'react'
import Link from 'next/link'
import About from './About'
import Contact from './Contact'

class Home extends Component
{
    render() {
        return (
            <div>
                <About />
                <Contact />
                <h1>This is a test! 
                    <Link href="/About">
                        <a>Learn more</a>
                    </Link>
                </h1>
            </div>
        )
    }
    
}
export default Home;

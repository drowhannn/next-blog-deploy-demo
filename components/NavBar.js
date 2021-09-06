import React from 'react'
import Link from 'next/link'

function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/posts"><a>Posts</a></Link></li>
            
            </ul>
            
        </div>
    )
}

export default NavBar

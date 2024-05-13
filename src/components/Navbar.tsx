import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center h-12'>
            <h1 className="p-8">EchoSphere</h1>
            <nav>
                <ul className='flex justify-between items-center space-x-12'>
                    <Link href='/'>Home</Link>
                    <Link href='/feed'>Feed</Link>
                    <Link href='/chat'>Chats</Link>
                    <li>Create</li>
                </ul>
            </nav>
            <h1 className='p-8'>Profile</h1>
        </div>
    )
}

export default Navbar
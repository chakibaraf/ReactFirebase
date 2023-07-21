import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (

    <>

      <nav className="navbar navbar-light bg-light px-5">
        <Link to="/"
        className='navbar-brand'>
          Authjs        
        </Link>
      </nav>


    </>

  )
}

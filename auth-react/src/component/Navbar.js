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

      <div>
      <button className=" btn btn-primary"> Sign up</button>
      <button className= " btn btn-primary ms-2"> Sign in</button>
      <button className=" btn btn-danger ms-2"> Logout</button>
      </div>
      </nav>

    </>

  )
}

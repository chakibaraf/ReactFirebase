import React , {useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export default function Navbar() {
  const {toggleModals} = useContext(UserContext)
  return (

    <>

      <nav className="navbar navbar-light bg-light px-5">
        <Link to="/"
        className='navbar-brand'>
          Authjs        
        </Link>

      <div>
      <button
      onClick={() => toggleModals("signUp")}
      className=" btn btn-primary"> Sign up</button>
      <button 
      onClick={() => toggleModals("signUp")}
      className= " btn btn-primary ms-2"> Sign in</button>
      <button
     
       className=" btn btn-danger ms-2"> Logout</button>
      </div>
      </nav>

    </>

  )
}

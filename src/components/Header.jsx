import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import{Link, useNavigate}  from 'react-router-dom'

const Header = () => {
  return (
    <Navbar style={{zIndex:'-1'}} className='position-fixed w-100 top-0 border rounded'>
    <Container>
    <Navbar.Brand>
     <Link className='fw-bolder' style={{textDecoration:'none'}} to={'/'}><i className="fa-solid fa-ship me-2"></i> Food Bestow<br />
     </Link>
    </Navbar.Brand>
   
     <div>
       <button className='btn btn-dark'>Logout <i className='fa-solid fa-right-form-bracket'></i></button>
     </div>
    </Container>
   </Navbar>
  )
}

export default Header
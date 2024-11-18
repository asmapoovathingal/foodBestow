import React from 'react'

const Footer = () => {
  return (
    <div style={{height:'300px'}} className='container mt-5 w-100 shadow'>
    <div className="container d-flex align-item-center justify-content-center">
        <div className="row">
          <div className="col-3">
            <i className="fa-solid fa-ship me-2"></i>Food Bestow<br />
            <p>Food donations can also help to support local communities.This can help to reduce poverty and can also help to improve the overall quality of life in the community.</p>

           
          </div>
          <div className="col-3 align-center">
            <h4 className='mb-4'>Links</h4>
            <h6 style={{cursor:'pointer'}}>Landing Page</h6>
            <h6 style={{cursor:'pointer'}}>Home Page</h6>
            <h6 style={{cursor:'pointer'}}>Authentication</h6>
            <h6 style={{cursor:'pointer'}}>Dashbord</h6>

          </div>
          <div className="col-2">
          <h4 className='mb-4'>Guides</h4>
            <h6 style={{style:'pointer'}}>React</h6>
            <h6 style={{style:'pointer'}}>React Bootstrap</h6>
            <h6 style={{style:'pointer'}}>React Router</h6>
          </div>
          <div className="col-4">
            
            <h6>  Contact Us</h6> 
            <input style={{width:'300px',height:'35px'}} className='rounded mb-2' type="text" placeholder='search' />  <br />           
              <i className="fa-brands fa-twitter me-3"></i> <i className="fa-brands fa-instagram me-3"></i>
            <i className="fa-brands fa-facebook me-3"></i> <i className="fa-brands fa-linkedin me-3"></i>
            {/* <i className="fa-brands fa-github me-3"></i> <i className="fa-solid fa-phone me-3"></i> */}

          </div>
        </div>
    </div>
</div>
  )
}

export default Footer
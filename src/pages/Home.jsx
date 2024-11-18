import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import homeImg from '../assets/home-image.webp'
import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'
const Home = () => {
  return (
<div style={{marginTop:'150px'}} className='d-flex align-items-center justify-content-center  '>
  <Header/>
<div >
<div className="container w-75">
  <div className="row align-items-center">
    <div className="col-lg-6">

  <br />
  <h1>Have you had food...?
    <p> "If you can't feed a hundred people, then just feed one."</p>
    </h1>
 <Link to={'/foods'} style={{fontSize:'25px'}}> Are you strarved..? click Here....</Link> <br />
<Link to={'/register'}><h4 className='m-5 p-5 btn btn-dark'> If you can join with us..</h4></Link>
    </div>
    <div className="col-lg-6">
<img className='m-5 p-5' style={{height:'550px'}} src={homeImg} alt="" />
    </div>
    <div>
  <Carousel/>
    </div>
    <Footer/>

  </div>
</div>
    
    

    </div>
    </div>
  )
}

export default Home
import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import FoodCard from '../components/foodCard.jsx'
import Form from 'react-bootstrap/Form';
import { getFoodAPI } from '../service/allAPI';



const Foods = () => {

  const[foods,setFoods]=useState([{
    meals:"",place:"",dateAndTime:"",status:""
  }])
  console.log(foods);
  









  return (
    <div className='container d-flex align-items-center justify-content-center m-5 p-5'>



    </div>
  )
}

export default Foods
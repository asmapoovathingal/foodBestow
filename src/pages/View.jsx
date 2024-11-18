import React, {  useContext, useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Foods from '../components/Foods';
import Add from '../components/Add';
import { deleteFoodAPI, getFoodAPI } from '../service/allAPI';
import { addResponseContext } from '../context/ContextShare';

const View = () => {
  const{addResponse,setAddResponse} =useContext(addResponseContext)
  const[foods,setFoods]=useState({
    meals:"",place:"",dateAndTime:"",status:""
  })
  const[records,setRecords]= useState(foods)
  
  console.log(foods);
  useEffect(()=>{
    getAllFoods()
  },[addResponse])
console.log(foods);

















  const getAllFoods=async()=>{
    const token =sessionStorage.getItem('token')
    if(token){
      const reqHeader={
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      try {
        const result = await getFoodAPI(reqHeader)
        console.log(result);
        if(result.status==200){
          setFoods(result.data)
  
        }else{
          console.log(result.response.data);
          
        }
        
      } catch (error) {
        console.log(error);
        
      }
    }
  }



  const handleDeleteFood=async(fid)=>{
    const token = sessionStorage.getItem('token')
   const reqHeader={
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
   }
   try {
    const result = await deleteFoodAPI(fid)
    console.log(fid);
    
    if(result.status==200){
      getAllFoods()

    }else{
      console.log("failed to delete food");
      console.log(result.response.data);
      
      
    }
   } catch (error) {
    console.log(error);
    
   }
  }






  return (
    <div className='d-flex align-items-center justify-content-center'>

      <div className="container w-75">
        <div className="row align-items-center m-5">
        {/* <input className='text-dark form-control'  type="text" placeholder='enter the city name' /> */}

          <div className='col-lg-8 m-5'>
          <div className=" table rounded my shadow">
  <table>
<thead>
  <tr>
    <th>Meals</th>
    <th>Place</th>
    <th>Date and Time</th>
    <th>Status</th>
  </tr>
</thead>
<tbody>
{
  foods?.length>0 ?
  foods.map(food=>(
    
    <tr key={food?._id}>
      {/* <td>{food._id}</td> */}
      <td>{food.meals}</td>
      <td>{food.place}</td>
      <td>{food.date}</td>
      <td>{food.time}</td> 
      <button className='btn btn-primary' onClick={()=>handleDeleteFood(food._id)}>Want it</button></tr>

  ))

  :
  <div className='text-danger fw-500'>No foods yet</div>
  
}
  
</tbody>
</table>
</div>         
          </div>


        </div>

      </div>
      <Add/>

    </div>
  )
}

export default View
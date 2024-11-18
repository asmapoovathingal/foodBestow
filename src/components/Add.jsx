import React, { useContext } from 'react'
import { useState,useEffect, } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {addFoodAPI} from '../service/allAPI'
import { Navigate, useNavigate } from 'react-router-dom';
import { addResponseContext } from '../context/ContextShare';

const Add = () => {
const {addResponse,setAddResponse} =  useContext(addResponseContext)
  const [show, setShow] = useState(false);



useEffect(()=>{
  addResponse
},[addResponse])










  const handleClose = () =>{
    setShow(false);
    setFoods({  meals:"",place:"",date:"",time:""
    })
  } 
  const handleShow = async(e) =>{
    setShow(true);


  }
  const navigate = useNavigate()
const[foods,setFoods]=useState({
  meals:"",place:"",date:"",time:""
})

console.log(foods);

const handleSaveFoods=async(e)=>{
 const {meals,place,date,time} =foods
 console.log(meals,place,date,time);
 
if(meals && place && date && time){
  // proceed to api call


const token = sessionStorage.getItem("token")
if(token){
  const reqBody=JSON.stringify(foods) 

  const reqHeader ={
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
  }

try {
  const result =await addFoodAPI(reqBody,reqHeader)
  console.log(result);
  if(result.status==200){
    handleClose()
    // alert("Food added successfully")
    // share result via context
    setAddResponse(result)
  }
  else{
    console.log((result.response.data)
  );
  }
} catch (error) {
  console.log(error);
  
}


}
}else{
  alert("please fill the form completely")
}
}



  
  
  return (
    <>
         <Button variant="primary" onClick={handleShow}>
       Add food
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Food Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        
 <FloatingLabel
        controlId="floatingInput"
        label="Food Item" 
        className="mb-3"
      >
        <Form.Control type="text" placeholder="foodItem"  onChange={e=>setFoods({...foods,meals:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel >
        <Form.Control  type="text" placeholder="place" controlid="floatingInput" label="place" onChange={e=>setFoods({...foods,place:e.target.value})}/>
      </FloatingLabel>

      <FloatingLabel controlid="floatingInput" label="date" >
        <Form.Control  type="date" placeholder="date " onChange={e=>setFoods({...foods,date:e.target.value})} />
      </FloatingLabel>

      <FloatingLabel controlid="floatingInput" label="time" >
        <Form.Control  type="time" placeholder="time " onChange={e=>setFoods({...foods,time:e.target.value})} />
      </FloatingLabel>




   








        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSaveFoods} variant="primary">Add Food Item</Button>

        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
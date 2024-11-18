import React, { useState } from 'react'
import logImg from '../assets/image.avif'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import gicon from '../assets/g-icon.png'
import { Link,Navigate, useNavigate } from 'react-router-dom';
import { loginApi, registerAPI } from '../service/allAPI';
import{GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import {auth} from '../../firebase/firebaseConfig'


const Auth = ({insideRegister}) => {
  
  const navigate = useNavigate()
  const [userData,setUserData]=useState({
    username:"",email:"",password:""
  })
  console.log(userData);
const handleRegister =async(e)=>{
e.preventDefault()
if(userData.username && userData.email && userData.password){
  // api call
  try {
    const result = await registerAPI(userData)
    if(result.status==200){
      alert(`welcome ..... please login and Thankful your bestows`)
      userData({username:"",email:"",password:""})
      navigate('/login')
    }else{
    if(result.status==406){
      // alert(result.response.data)
      setUserData({username:"",email:"",password:""})
      // navigate('/register')

    }  
    }
  } catch (err) {
    console.log(err);
    
  }
}else{
  alert("Please fill the form completely")
}
}

const handleLogin =async(e)=>{
  e.preventDefault()
if(userData.email && userData.password){
  // api call
  try {
   const result = await loginApi(userData)
   console.log(result);
   if(result.status==200){
    sessionStorage.setItem("user",JSON.stringify(result.data.user))
    sessionStorage.setItem("token",result.data.token)
    
    setUserData({username:"",email:"",password:""})
    navigate('/view')
   }else{
    if(result.response.status==404){
      alert(result.response.data)
    }
   }
    
  } catch (err) {
    console.log(err);
    
  }
}else{
  alert("please fill the form completly")
}
}
const handleGoogle=async(e)=>{
  const provider =await new GoogleAuthProvider();
return signInWithPopup(auth,provider)
navigate('/view')
}














  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex align-items-center justify-content-center'>
            <div className="container w-75">
            <div className="card shadow p-2">
            <div className="row align-items-center">
            <div className="col-lg-6">
            <h1 className='fw-bolder mt-2'> <i className='fa-brands fa-ship'></i>Food Bestow </h1>
              <h5 className='fw-bolder mt-2'>
                Sign{
                  insideRegister?"Up":"In"
                } to your Account
              </h5>
              <Form>
              {
                insideRegister &&
                <FloatingLabel onChange={e=>setUserData({...userData,username:e.target.value})}
                controlId="floatingInput"
                label="User Name"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="user name" />
              </FloatingLabel>

              }
            <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com" onChange={e=>setUserData({...userData,email:e.target.value})}
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
          onChange={e=>setUserData({...userData,password:e.target.value})}
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>
      
      {
        insideRegister ?
        <div className="mt-3">
          <button onClick={handleRegister}  className='btn btn-primary mb-2'>Register</button>
          <p>Already have an Account ?Click here to <Link to={'/login'}>Login</Link></p>
        </div>
        :
        <div className="mt-3">
          <button onClick={handleLogin}  className='btn btn-success mb-2'>Login</button>
          <p>Already have an Account ?Click here to <Link to={'/register'}>Register</Link></p>
        </div>
      }
      </Form>
<br />

  <img style={{height:'50px'}} src={gicon} alt="" />    <button onClick={handleGoogle}  className='mt-5 text-warning'>continue with Google</button>
<br /><br />

</div>
<div className="col-lg-6">
  <img style={{height:'450px'}} src={logImg} alt="" />
</div>
</div>
            </div>
</div>
</div>
  )
}

export default Auth
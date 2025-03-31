import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from "../utils/userSlice";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const[emailId,setEmailId] = useState("avy@gmail.com")
  const[password,setPassword] = useState("12345")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async() => {
    try{
    const res = await axios.post("http://localhost:3000/login",{
      emailId,
      password
    },{withCredentials:true})
    console.log(res.data)
    dispatch(addUser(res.data))
    navigate("/")
  } catch(err)
  {
    console.log(err.message)
  }
    
  }
  return (
    <div className='flex justify-center my-14'>
      <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Login</h2>
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Email Id</span>
    
  </div>
  <input type="text"
   placeholder="Type here" 
   className="input input-bordered w-full max-w-xs" 
   value={emailId}
   onChange={((e) => {setEmailId(e.target.value)})}
   />

  <div className="label">
    <span className="label-text">Password</span>
    
    
  </div>
  <input type='text'
   placeholder='Type here'
    className='input input-bordered w-full max-w-xs'
    value={password}
    onChange={((e) => {setPassword(e.target.value)})}
    />
  
</label>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary my-2 " onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login
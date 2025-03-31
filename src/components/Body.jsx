import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

import NavBar from './NavBar'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'

 const Body = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userData = useSelector((store) =>store.user)
  const fetchUser = async() => {
    try{
    const res = await axios.get("http://localhost:3000/profile",{
      withCredentials:true
    })
    dispatch(addUser(res.data))

  }catch(err)
  {
    if(err.status===401)
    {
      navigate("/login")
    }
    console.log(err.message)
  }

  }

  useEffect(() => {
    fetchUser()

  },[])


  return (
    <div>
    <NavBar/>
    <Outlet/>
    </div>
  )
}
export default Body

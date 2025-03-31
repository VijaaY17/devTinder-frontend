import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addConnection } from '../utils/connectionsSlice'

const Connections = () => {
  const dispatch = useDispatch()
  const connections = useSelector((store) => store.connection.connection)
  console.log(connections)
  const fetchConnections = async() => {
    try{
      const res = await axios.get("http://localhost:3000/user/connections",{
        withCredentials : true
      })
      console.log(res.data.data)
      dispatch(addConnection(res.data.data))

    }catch(err)
    {
      console.log(err.message)
    }
  }

useEffect(() =>{
  fetchConnections()

},[])

if(!connections) return
if(connections.length==0) return <h1>No Connections found!</h1>

  return (
    <div className=' text-center my-8'>
      <h1 className='text-2xl text-bold'>Connections</h1>
      {
       
        connections.map((connecion,index) => {
          const {firstName,lastName,about} = connecion
          return <div key={index} className='m-4 p-4  rounded-lg bg-base-300 w-1/2 mx-auto'> 
            <h1>{firstName + " " + lastName}</h1>
            <p>{about}</p>
          </div>
        })
      }
      
    </div>
  )
}

export default Connections
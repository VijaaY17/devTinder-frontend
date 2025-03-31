import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest, removeRequest } from '../utils/requestsSlice'

const Requests = () => {
  const dispatch = useDispatch()
  // const requests = useSelector((store) => store.request.requests)
  const requests = useSelector((store) => store.request.request); 
  console.log(requests)

  const reviewRequest = async(status,_id) => {
    try{
    const res = await axios.post("http://localhost:3000/request/review/" + status + "/" + _id,{},{
      withCredentials : true
    })
    
    dispatch(removeRequest(_id))
    }catch(err)
    {
      console.log(err.message)
    }
  }
 

  const fetchRequests = async () => {
    try{
    const res = await axios.get("http://localhost:3000/user/requests/received",{
      withCredentials : true
    })
    console.log(res.data.data)
    dispatch(addRequest(res.data.data))
    }catch(err)
    {
      console.log(err.message)
    }

  }

  useEffect(() => {
    fetchRequests()
  },[])
  if(!requests) return
  if(requests.length===0) return <h1>No Requests found</h1>
  return (
    <div className=' text-center my-8'>
    <h1 className='text-2xl text-bold'>Connection Requests</h1>
    {
     
      requests.map((request,index) => {
        const {firstName,lastName} = request.fromUserId
        return <div key={index} className='m-4 p-4 flex justify-between items-center rounded-lg bg-base-300 w-2/3 mx-auto'> 
          <h1>{firstName + " " + lastName}</h1>
          <div>
          <button className="btn btn-primary" onClick={() => reviewRequest("rejected",request._id)}>Reject</button>
          <button className="btn btn-secondary mx-4 " onClick={() => reviewRequest("accepted",request._id)}>Accept</button>
          </div>
        </div>
      })
    }
    
  </div>
  )
}

export default Requests
import React from 'react'
import Feed from './Feed'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { removeFeed } from '../utils/feedSlice'

const UserCard = ({user}) => {
  // const {firstName} = props.feed
  const {firstName,about,age,_id} = user
  const dispatch = useDispatch()
  
  console.log(user)

  const handleSendRequest = async(status,userId) => {
    try{
    const res = await axios.post("http://localhost:3000/request/send/" + status + "/" + userId,{},{
      withCredentials : true
    })
    dispatch(removeFeed(userId))
    } catch(err)
    {
      console.log(err.message)
    }
  }
  return (
    <div className='flex justify-center my-10'>
      <div className="card bg-base-300 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName}</h2>
    <h2 className="card-title">{age}</h2>
    <p>{about}</p>
    <div className="card-actions justify-center my-2">
      <button className="btn btn-primary" onClick={() => handleSendRequest("ignored",_id)}>Ignore</button>
      <button className="btn btn-secondary" onClick={() => handleSendRequest("interested",_id)}>Interested</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default UserCard
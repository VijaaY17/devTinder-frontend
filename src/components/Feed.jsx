import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCard from './UserCard'

const Feed = () => {
  const dispatch = useDispatch()
  const feed = useSelector((store) => store.feed) || { feed: [] } 

  const getfeed = async () => {
    try {
      const res = await axios.get("http://localhost:3000/user/feed", {
        withCredentials: true
      })
      dispatch(addFeed(res.data))
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    getfeed()
  }, [])
  if(!feed) return
  if(feed.length<=0) return <h1>No new users found!</h1>

  return (
    feed.feed && (
    <div>
      <UserCard user = {feed.feed[0]}/>
    
    </div>
  )
)
}

export default Feed

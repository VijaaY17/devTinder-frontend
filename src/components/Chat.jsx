import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

 const Chat = () => {
 const {targetUserId} = useParams();
 console.log(targetUserId)
 const [message,setMessage] = useState([{text:"hello vijay"}])
  return (
    <div className='w-1/2 mx-auto border border-gray-600 mt-5 h-[70vh] flex flex-col'>
        <h1 className='border-b border-gray-600 p-5'>Chat</h1>
        <div className=' p-5 flex-1 overflow-scroll'>
            {message.map((msg,index) => {
                return <div key={index} className="chat chat-start">
                <div className="chat-header">
                  Vijay
                  <time className="text-xs opacity-50 ">2 hours ago</time>
                </div>
                <div className="chat-bubble">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">Seen</div>
              </div>

            })}
        </div>
        <div className='p-3 border-t border-gray-600 flex items-center gap-2'>
            <input className='flex-1 border border-gray-500 text-white rounded p-2'></input>
            <button className='btn btn-secondary'>Send</button>
        </div>
    </div>
  )
}

export default Chat

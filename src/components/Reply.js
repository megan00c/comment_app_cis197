import React, { useState } from 'react'
import { Voter } from './Voter'

export const Reply = ({postData, id, reply}) => {

  let {name, body, children} = postData[id];
  
  return (<div>
        <div className = 'author'>{name}</div>
        <div className = 'text'>{body}</div>
        <Voter></Voter>
        <br></br>
        <button onClick={()=>reply(id)}>Reply</button>
        <div className="left-margin">
          {
            children.map((id)=><Reply reply={reply} postData={postData} id={id}></Reply>)
          }
        </div>
      </div>
  )
  
}
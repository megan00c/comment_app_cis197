import React, { useState } from 'react'

export const Reply = ({text, author, children}) => {
  
  if (children === undefined || children.length === 0) {
    return (<div>
      <div className = 'author'>{author}</div>
      <div className = 'text'>{text}</div>
      </div>
    )
  }

  let i = 0

  for (i = 0; i < children.length; i++) {
    return (
      <div>
      <div className = 'author'>{author}</div>
      <div className = 'text'>{text}</div>
      <Reply text = {children[i].text} author = {children[i].author}
        children = {children[i].children}></Reply>
        </div>
    )
  }
  
}
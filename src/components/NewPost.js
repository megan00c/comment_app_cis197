import React, { useState } from 'react'
import { Voter } from './Voter.js'
//import { updateTextInput, updateNameInput } from '../actions/functions'

export const NewPost = () => {

    const [textInput, setTextInput] = useState('')
    const [textEntry, setTextEntry] = useState('')

    const [replyNameInput, setReplyNameInput] = useState('')
    const [replyTextInput, setReplyTextInput] = useState('')

    const [modalActive, setModalActive] = useState(false)

    const [nameInput, setNameInput] = useState('')
    const [name, setName] = useState('')

    const [posts, setPosts] = useState([])

    const [idct, setIdct] = useState(0)

    const [currEdit, setCurrEdit] = useState(0)

    const updateReplyNameInput = e => {
        setReplyNameInput(e.target.value)
    }
    
    const updateReplyTextInput = e => {
        setReplyTextInput(e.target.value)
    }

    const updateTextInput = e => {
        setTextInput(e.target.value)
    }
    
    const updateNameInput = e => {
        setNameInput(e.target.value)
    }

    const addPost = e => {
        if (nameInput.length > 0 && textInput.length > 0) {
            setPosts([...posts, { name: nameInput, body: textInput, id: idct }])
            setIdct(idct + 1)
            setNameInput('')
            setTextInput('')
        }
    }

    const replyP = e => {
        setModalActive(true)
    }

    const submitReply = id => {
        setModalActive(false)
        const newPosts = posts.map(post => {
            if (post.id !== currEdit) {
                return post
            } else {
              return { name: post.name, body: post.body, id: post.id, 
                children: [...children, {name: replyNameInput, body: replyTextInput}] }
            }
          })
        setPosts(newPosts)
        setCurrEdit(-1)
    }

    return (
        <>
         <div className = "add-a-post">
             <h2>Add a Post</h2>
             <input onChange={e => updateNameInput(e)} placeholder = 'Name' value = {nameInput} />
             <br></br>
             <br></br>
             <input onChange={e => updateTextInput(e)} placeholder = 'Write a new post...' value = {textInput} />
             <br></br>
             <br></br> 
             <button className = 'submit-button' onClick = {() => addPost()}> Submit Post </button>
         </div>

         <br></br>
         <br></br>
         <br></br>

         <div className="posts-container">
            {
            posts.map(post =>
            (
                <div className = 'post'>
                    <div className='post-name'>Name: {post.name} </div>
                    <div className='post-entry'>Post: {post.body}</div>
                    <button className = 'reply-button' onClick = {() => replyP()}>Reply</button>
                    <br></br>
                    <Voter></Voter>
                </div>
            )) 
            } 
        </div>

        {modalActive && <div className="modal" onClick = {() => setModalActive(false)}>
            <div className = "modal-inner" onClick = {e => e.stopPropagation()}>
            <h5>Reply!</h5>
                <input onChange = {e => updateReplyNameInput(e)} placeholder = 'Name' defaultValue = {replyNameInput} />
                <textarea placeholder = '' onChange={e => updateReplyTextInput(e)} defaultValue = {''} />
                <button onClick = {e => submitReply(e)}>Submit reply</button>
            </div>
            </div>}
        </>
    )
}


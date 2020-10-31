import React, { useState } from 'react'
import { Reply } from './Reply.js'

export const NewPost = () => {

    const [textInput, setTextInput] = useState('')

    const [replyNameInput, setReplyNameInput] = useState('')
    const [replyTextInput, setReplyTextInput] = useState('')

    const [modalActive, setModalActive] = useState(false)

    const [nameInput, setNameInput] = useState('')

    const [topLevelPosts, setTopLevelPosts] = useState([])
    const [postData, setPostData] = useState({}) // postdata is a map from a post's id to its data and children

    const [idct, setIdct] = useState(0)

    const [activeReply, setActiveReply] = useState(-1)

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
            setPostData({...postData, [idct]: { name: nameInput, body: textInput, id: idct, children: [] }})
            setTopLevelPosts([...topLevelPosts, idct])
            setIdct(idct + 1)
            setNameInput('')
            setTextInput('')
        }
    }

    const replyP = id => {
        setModalActive(true)
        setActiveReply(id)
    }

    const submitReply = id => {
        setModalActive(false)
        setPostData({...postData,  [activeReply]: {...postData[activeReply], children: [...postData[activeReply].children, idct]}, [idct]: {replyNameInput, body: replyTextInput, children: []}});
        setIdct(idct+1)
        setActiveReply(-1)
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
             <button className = 'submit-button' onClick = {() => addPost()}> Submit </button>
        </div>

         <br></br>
         <br></br>
         <br></br>

         <div className="posts-container">
            {
            topLevelPosts.map(id =>
            (
                <div>
                    <div className = 'post'>
                        <Reply reply={replyP} id={id} postData={postData}></Reply>
                    </div>
                    <br></br>
                </div>
            )) 
            } 
        </div>

        {modalActive && <div className="modal" onClick = {() => setModalActive(false)}>
            <div className = "modal-inner" onClick = {e => e.stopPropagation()}>
            <h5>Reply!</h5>
                <input onChange = {e => updateReplyNameInput(e)} placeholder = 'Name' defaultValue = {''} />
                <textarea placeholder = '' onChange={e => updateReplyTextInput(e)} defaultValue = {'@' + name + ' '} />
                <button onClick = {e => submitReply(e)}>Submit reply</button>
            </div>
            </div>}
        </>
    )
}
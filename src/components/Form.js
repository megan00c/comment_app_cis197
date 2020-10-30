import React, { useState } from 'react'

export const Form = () => {
    const [textInput, setTextInput] = useState('')
    const [textEntry, setTextEntry] = useState('')

    const [nameInput, setNameInput] = useState('')
    const [name, setName] = useState('')

    const [posts, setPosts] = useState([])

    const [idct, setIdct] = useState(0)

    const [currEdit, setCurrEdit] = useState(0)

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
            setName(nameInput)
            setTextEntry(textInput)
            setNameInput('')
            setTextInput('')
        }
    }

return (
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
)}
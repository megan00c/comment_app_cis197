import React from 'react'
import { NewPost } from './NewPost'
import { Voter } from './Voter'
import { Reply } from './Reply'
import '../styles/Styles.css'

const App = () => (
    <div>
        <h1>React Comment App</h1>
        <NewPost></NewPost>
        <br></br>
        <Voter></Voter>
    </div>
)

export default App

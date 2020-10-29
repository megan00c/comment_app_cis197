import React, {useState} from 'react'


export const Voter = ()  => {
    const [voteCount, incrementVoteCount] = useState(0)

    const increaseCount = () => {
        incrementVoteCount(voteCount + 1)
    }

    const decreaseCount = () => {
        incrementVoteCount(voteCount - 1)
    } 

    return (
    <>
        <button className = 'upvote' onClick = {() => increaseCount()}> yay </button>
        <div>{voteCount}</div>
        <button className = 'downvote' onClick = {() => decreaseCount()}> nay </button>
    </>
    )
}
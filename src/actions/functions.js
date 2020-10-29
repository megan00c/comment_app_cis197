
export const updateTextInput = e => {
    setTextInput(e.target.value)
}

export const updateNameInput = e => {
    setNameInput(e.target.value)
}

export const increaseCount = () => {
    incrementVoteCount(voteCount + 1)
}

export const decreaseCount = () => {
    incrementVoteCount(voteCount - 1)
}
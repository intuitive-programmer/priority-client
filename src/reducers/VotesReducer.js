const VotesReducer = (state = 6, action) => {
  switch (action.type) {
    case "ADD_VOTE":
    return --state
    case "REMOVE_VOTE":
    return ++state
    default:
    return state
  }
}

export default VotesReducer

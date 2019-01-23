const defaultSession = {
  mainFocus: '',
  timer: 5000
}

const SessionReducer = (state = defaultSession, action) => {
  switch (action.type) {
    case "NEW_SESSION":
    return action.newSession
    default:
    return state
  }
}

export default SessionReducer
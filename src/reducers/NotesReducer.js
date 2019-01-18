const NotesReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_NOTE":
    return [...state, action.noteToCreate]
    default:
    return state
  }
}

export default NotesReducer
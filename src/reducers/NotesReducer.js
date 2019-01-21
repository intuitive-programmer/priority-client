const NotesReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_NOTE":
    return [...state, action.noteToCreate]
    case "ADD_VOTE":
    return addVote(state, action.id)
    case "REMOVE_VOTE":
    return removeVote(state, action.id)
    default:
    return state
  }
}

const addVote = (notes, id) => {
  const prevNotes = notes.filter(note => note.id !== id)
  const noteToUpdate = notes.find(note => note.id === id)
  const updatedNote = {
    ...noteToUpdate,
    votes: ++noteToUpdate.votes
  }
  const currentNotes = sortById([...prevNotes, updatedNote])
  
  return currentNotes
}

const removeVote = (notes, id) => {
  const prevNotes = notes.filter(note => note.id !== id)
  const noteToUpdate = notes.find(note => note.id === id)
  const updatedNote = {
    ...noteToUpdate,
    votes: --noteToUpdate.votes
  }
  const currentNotes = sortById([...prevNotes, updatedNote])
  
  return currentNotes
}

const sortById = array => array
  .sort(function(a, b) { return a.id - b.id })

export default NotesReducer
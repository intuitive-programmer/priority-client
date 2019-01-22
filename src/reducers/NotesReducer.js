const testNote = {
  id: 1,
  text: "Here is a #test note.",
  keywords: [
    {
      id: 1,
      text: "test"
    }
  ],
  votes: 3
}

const NotesReducer = (state = [testNote], action) => {
  switch (action.type) {
    case "CREATE_NOTE":
    return [...state, action.noteToCreate]
    case "ADD_VOTE":
    return addVote(state, action.id)
    case "REMOVE_VOTE":
    return removeVote(state, action.id)
    case "SORT_BY_VOTES":
    return sortByVotes(state)
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

const sortByVotes = notes => {
  const notesWithVotes = notes.filter(note => note.votes > 0)

  const notesSortedByVotes = notesWithVotes
    .sort(function(a, b) { return b.votes - a.votes })

  return notesSortedByVotes
}

export default NotesReducer
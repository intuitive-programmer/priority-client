import React from 'react'

const NoteInput = ({ handleNoteInput }) => {
  return(
    <input
      className="note-input"
      onChange={handleNoteInput}
      type="text"
      placeholder="Add an idea..."
      autoComplete="off"
      autoFocus
    />
  )
}

export default NoteInput
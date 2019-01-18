import React from 'react'

const NoteInput = ({ handleNoteInput, disableNoteCreator }) => {
  return(
    <input
      className="note-input"
      onChange={handleNoteInput}
      type="text"
      placeholder="Add an idea..."
      disabled={disableNoteCreator}
      autoComplete="off"
      autoFocus
    />
  )
}

export default NoteInput
import React, { Component } from 'react'


class NoteItem extends Component {
  state = {
    shortNoteText: true
  }

  toggleNoteText = () => this.setState(state => ({ shortNoteText: !state.shortNoteText }))

  render() {
    const { shortNoteText } = this.state
    const { note } = this.props
    return(
      <div
        className="note-item-container note-shadow"
      >
        <div
          className={shortNoteText
            ? "note-text short"
            : "note-text long"
          }
          onClick={() => {
            this.toggleNoteText()
            this.noteText.scrollTo(0, 0)
          }}
          ref={noteText => {this.noteText = noteText}}
        >
          {note.text}
        </div>
        <div className="keywords-container">
          <div className="note-keywords">
            {note.keywords.map(keyword =>
              <div
                key={keyword.id}
                className="keyword-chip"
              >
                {keyword.text}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default NoteItem
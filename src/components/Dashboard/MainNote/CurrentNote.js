import React from 'react'
import { connect } from 'react-redux'

const CurrentNote = ({ note }) => {
  const renderVotes = () => {
    const voteListEls = []

    for (let i = 0; i < note.votes; i++) {
      const listEl =
        <li
          key={i}
          className="vote"
        ></li>

        voteListEls.push(listEl)
    }

    return voteListEls
  }

  return(
    <div className="main-note-section">
      <header className="current-note-section flex-center">
        {note.text}
      </header>
      <footer className="current-note-section current-note-footer">
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
        <ul className="votes-container">
          {renderVotes()}
        </ul>
      </footer>
    </div>
  )
}

const mapStateToProps = state => ({
  note: state.notes[0]
})

export default connect(mapStateToProps)(CurrentNote)
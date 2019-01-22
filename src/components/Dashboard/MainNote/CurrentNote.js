import React from 'react'

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
    <div className="current-note-container">
      <header className="current-note-header flex-center">
        {note.text}
      </header>
      <footer className="current-note-footer">
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

export default CurrentNote
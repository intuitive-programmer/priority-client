import React, { Component } from 'react'
import { connect } from 'react-redux'


class VoteItem extends Component {
  state = {
    shortNoteText: true
  }

  toggleNoteText = event => {
    event.stopPropagation()
    this.setState(state => ({ shortNoteText: !state.shortNoteText }))
  }

  addVoteToNote = () => {
    const { votes, note, addVote, votingEnabled } = this.props
    if (votes > 0 && votingEnabled) addVote(note.id)
  }

  removeVoteFromNote = event => {
    event.stopPropagation()
    const { note, removeVote, votingEnabled } = this.props
    if (note.votes > 0 && votingEnabled) removeVote(note.id)
  }

  render() {
    const { shortNoteText } = this.state
    const { note } = this.props
    return(
      <div
        className="note-item-container note-shadow"
        onClick={() => this.addVoteToNote()}
      >
        <div
          className={shortNoteText
            ? "note-text short"
            : "note-text long"
          }
          onClick={event => {
            this.toggleNoteText(event)
            this.refs.noteText.scrollTo(0, 0)
          }}
          ref="noteText"
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
        <ul className="votes-container">
          {this.renderVotes()}
        </ul>
      </div>
    )
  }

  renderVotes = () => {
    const { note } = this.props

    const voteListEls = []

    for (let i = 0; i < note.votes; i++) {
      const listEl =
        <li
          key={i}
          className="vote"
          onClick={event => this.removeVoteFromNote(event)}
        ></li>

        voteListEls.push(listEl)
    }

    return voteListEls
  }
}

const mapStateToProps = state => ({
  votes: state.votes
})

const mapDispatchToProps = dispatch => ({
  addVote: id => dispatch({ type: "ADD_VOTE", id }),
  removeVote: id => dispatch({ type: "REMOVE_VOTE", id })
})

export default connect(mapStateToProps, mapDispatchToProps)(VoteItem)
import React from 'react'
import { connect } from 'react-redux'

const VotesHeader = ({ votes }) => {
  const renderVotes = () => {
    const voteListEls = []

    for (let i = 0; i < votes; i++) {
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
    <ul className="votes-header-container">
      {renderVotes()}
    </ul>
  )
}

const mapStateToProps = state => ({
  votes: state.votes
})

export default connect(mapStateToProps)(VotesHeader)
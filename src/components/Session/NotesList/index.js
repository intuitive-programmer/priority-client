import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles, Grid } from '@material-ui/core'
import { SessionStyles } from '../../../stylesheets/material-ui'

import NoteItem from './NoteItem'
import VoteItem from './VoteItem'

class NotesList extends Component {
  state = {
    votingEnabled: true
  }

  componentWillReceiveProps({ match }) {
    const currentPart = match.url.split('/')[3]
    if (currentPart === 'review') this.setState({ votingEnabled: false })
  }

  render() {
    const { classes, notes } = this.props
    return(
      <Grid
        container
        classes={{ container: classes.centered }}
        xs={12}
        sm={8}
      >
        {notes.map(note => this.renderList(note))}
      </Grid>
    )
  }

  renderList = note => {
    const { votingEnabled } = this.state
    const { classes, match } = this.props
    const currentScene = match.url.split('/')[2]
    return(
      <Grid
        item
        classes={{ item: classes.noteItem }}
        xs={12}
        sm={8}
      >
        {currentScene === 'note'
          ? <NoteItem key={note.id} note={note} />
          : <VoteItem
              key={note.id}
              note={note}
              votingEnabled={votingEnabled}
            />
        }
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
})

export default withStyles(SessionStyles)(connect(mapStateToProps)(NotesList))
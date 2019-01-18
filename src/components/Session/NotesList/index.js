import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles, Grid } from '@material-ui/core'
import { SessionStyles } from '../../../stylesheets/material-ui'

import NoteItem from './NoteItem'

class NotesList extends Component {
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
    const { classes } = this.props
    
    return(
      <Grid
        item
        classes={{ item: classes.noteItem }}
        xs={12}
        sm={8}
      >
        <NoteItem key={note.id} note={note} />
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
})

export default withStyles(SessionStyles)(connect(mapStateToProps)(NotesList))
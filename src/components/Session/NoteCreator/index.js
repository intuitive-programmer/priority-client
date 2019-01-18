import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles, Grid } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { SessionStyles } from '../../../stylesheets/material-ui'

import NoteInput from './NoteInput'
import ErrorMessage from './ErrorMessage'

let noteCount = 0

class NoteCreator extends Component {
  state = {
    noteInput: '',
    inputError: null,
  }

  handleNoteInput = event => this.setState({ noteInput: event.target.value })

  extractKeywords = input => {
    const keywords = input.match(/(?:|^)#[A-Za-z0-9\-\_]+(?:|$)/g)

    if (keywords) {
      return keywords.map((keyword, index) => {
        return({
          id: ++index,
          text: keyword
        }) 
      })
    } else {
      return null
    }

  }
  
  handleSubmit = event => {
    event.preventDefault()
    const { noteInput } = this.state
    const { createNote } = this.props

    const keywords = this.extractKeywords(noteInput)
    
    const isValid = this.validate(noteInput, keywords)

    if (isValid) {
      const noteToCreate = {
        id: ++noteCount,
        text: noteInput,
        keywords,
        votes: 0
      }
  
      createNote(noteToCreate)
      this.resetState()
      event.target.reset()
    }
  }

  validate = (noteInput, keywords) => {
    if (noteInput === '') {
      this.setState({ inputError: "Your note is empty."})
      return false
    }

    if (keywords === null) {
      this.setState({ inputError: "Keyword Missing: use '#' to create at least one keyword."})
      return false
    }

    return true
  }

  resetState = () => this.setState({ noteInput: '', inputError: null })

  render() {
    const { inputError } = this.state
    const { classes, disableNoteCreator } = this.props
    return(
      <Grid
        container
        classes={{ container: classes.centered }}
        xs={12}
        sm={8}
      >
        <Grid
          item
          classes={{ item: classes.noteCreatorItem }}
          xs={12}
          sm={8}
        >
          <div className="note-creator note-shadow">
            <Add
              classes={{
                root: classes.addIcon
              }}
            />
            <form
              onSubmit={this.handleSubmit}
              noValidate
              autoComplete="off"
            >
              <NoteInput
                handleNoteInput={this.handleNoteInput}
                disableNoteCreator={disableNoteCreator}
              />
            </form>
          </div>
          <ErrorMessage error={inputError ? inputError : ''} />
        </Grid>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispath => ({
  createNote: noteToCreate => dispath({ type: "CREATE_NOTE", noteToCreate })
})

export default connect(null, mapDispatchToProps)(withStyles(SessionStyles)(NoteCreator))

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles, Grid, TextField, Button } from '@material-ui/core'
import { LaunchPageStyles } from '../../stylesheets/material-ui'

class LaunchForm extends Component {
  state = {
    focusInput: '',
    timer: null
  }

  handleFocusInput = event => this.setState({ focusInput: event.target.value })

  handleTimerClick = timer => this.setState({ timer })

  handleSubmit = event => {
    event.preventDefault()

    const { focusInput, timer } = this.state
    const { startSession } = this.props

    const newSession = {
      mainFocus: focusInput,
      timer
    }

    startSession(newSession)
  }

  render() {
    const { classes } = this.props
    return(
      <Grid
        container
        classes={{ container: classes.centered }}
        spacing={16}
        xs={8}
      >
        <Grid
          item
          xs={12}
          classes={{ item: classes.startBtnItem }}
          sm={8}
        >
          <form
            id="launch-form"
            className="full-container"
            onSubmit={this.handleSubmit}
          >
            <TextField
              fullWidth
              label="Main Focus"
              onChange={this.handleFocusInput}
            />
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              onClick={() => this.handleTimerClick(120000)}
            >
              2 mins
            </Button>
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              onClick={() => this.handleTimerClick(300000)}
            >
              5 mins
            </Button>
          </form>
        </Grid>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startSession: newSession => dispatch({ type: "NEW_SESSION", newSession })
})

export default connect(null, mapDispatchToProps)(withStyles(LaunchPageStyles)(LaunchForm))
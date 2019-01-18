import React, { Component } from 'react'

import { withStyles, Grid, TextField } from '@material-ui/core'
import { LaunchPageStyles } from '../../stylesheets/material-ui'

class LaunchForm extends Component {
  state = {
    focusInput: ''
  }

  handleFocusInput = event => this.setState({ focusInput: event.target.value })

  render() {
    const { classes } = this.props
    console.log(this.state.focusInput)
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
          <form className="full-container">
            <TextField
              fullWidth
              label="Main Focus"
              onChange={this.handleFocusInput}
            />
          </form>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(LaunchPageStyles)(LaunchForm)
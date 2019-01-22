import React, { Component } from 'react'

import { withStyles, Grid, TextField } from '@material-ui/core'
import { DashboardStyles } from '../../../stylesheets/material-ui'

class ActionSteps extends Component {
  state = {
    actionSteps: [],
    actionStep001Input: '',
    actionStep002Input: '',
    actionStep003Input: ''
  }

  handleActionStepsInput = event => this.setState({
    [event.target.id]: event.target.value
  })

  render() {
    const { classes } = this.props
    return(
      <div className="main-note-section action-steps-container">
        <Grid
          container
          classes={{ container: classes.centered }}
          xs={12}
          sm={8}
        >
          <Grid
            item
            xs={12}
          >
            <h3 className="action-steps-heading heading">Write 3 Action Steps</h3>
            <p className="subtitle">That are achievable within 2 weeks</p>
            <form
              className="action-steps-form"
              noValidate
              autoComplete="off"
            >
              {this.renderActionStepsInputs()}
            </form>
          </Grid>
        </Grid>
      </div>
    )
  }

  renderActionStepsInputs = () => {
    const { classes } = this.props
    const actionStepsEls = []

    for (let i = 1; i < 4; i++) {
      const actionStepInput =
        <TextField
          id={'actionStep00' + i + 'Input'}
          classes={{
            root: classes.textfield
          }}
          label={'Action Step ' + i}
          onChange={this.handleActionStepsInput}
          fullWidth
        />
      
      actionStepsEls.push(actionStepInput)
    }

    return actionStepsEls
  }
}

export default withStyles(DashboardStyles)(ActionSteps)
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles, Grid, TextField } from '@material-ui/core'
import { DashboardStyles } from '../../../stylesheets/material-ui'
import ErrorMessage from '../../ErrorMessage';

class ActionSteps extends Component {
  state = {
    step001Input: '',
    step002Input: '',
    step003Input: '',
    inputError: null
  }

  handleActionStepsInput = event => this.setState({
    [event.target.id]: event.target.value
  })

  handleActionStepsSubmit = event => {
    event.preventDefault()

    const { step001Input, step002Input, step003Input } = this.state
    const { saveActionSteps } = this.props

    let stepId = 1
    
    const actionSteps = [step001Input, step002Input, step003Input]

    const isValid = this.validateInputs(actionSteps)

    if (isValid) {
      actionSteps.map(stepInput => ({
          id: stepId++,
          actionStep: stepInput
        }))
  
      saveActionSteps(actionSteps)
      this.resetState()
      event.target.reset()
    } else {
      this.setState({
        inputError: "Please fill in all Action Steps!"
      })
    }
  }

  validateInputs = actionSteps => {
    if (actionSteps.includes('')) {
      return false
    } else {
      return true
    }
  }

  resetState = () => {
    this.setState({
      step001Input: '',
      step002Input: '',
      step003Input: '',
      inputError: null
    })
  }

  render() {
    const { inputError } = this.state
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
              id="action-steps-form"
              onSubmit={this.handleActionStepsSubmit}
              noValidate
              autoComplete="off"
            >
              {this.renderActionStepsInputs()}
            </form>
            <ErrorMessage error={inputError ? inputError : ''} />
          </Grid>
        </Grid>
      </div>
    )
  }

  renderActionStepsInputs = () => {
    const { classes } = this.props
    const actionStepsEls = []

    for (let i = 1; i < 4; i++) {
      let stepId = `step00${i}Input`
      const actionStepInput =
        <TextField
          id={stepId}
          classes={{
            root: classes.textfield
          }}
          label={'Action Step ' + i}
          value={this.state.stepId}
          onChange={this.handleActionStepsInput}
          fullWidth
        />
      
      actionStepsEls.push(actionStepInput)
    }

    return actionStepsEls
  }
}

const mapDispatchToProps = dispatch => ({
  saveActionSteps: actionSteps => dispatch({ type: "SAVE_ACTION_STEPS", actionSteps })
})

export default connect(null, mapDispatchToProps)(withStyles(DashboardStyles)(ActionSteps))
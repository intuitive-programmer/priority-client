import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { withStyles, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@material-ui/core'
import { DashboardStyles } from '../../stylesheets/material-ui'

class ProjectCreatorDialog extends Component {
  state = {
    projectNameInput: ''
  }

  handleProjectNameInput = event => this.setState({ projectNameInput: event.target.value })

  render() {
    return(
      <Dialog
        open={true}
      >
        <DialogTitle>Create a Project</DialogTitle>
        <DialogContent>
          <form
            id="create-project-form"
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Project Name"
              onChange={this.handleProjectNameInput}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Link to='/dashboard' className="clean-link">
            <Button
              type="submit"
              form="create-project-form"
              variant="contained"
              color="primary"
            >
              Create
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    )
  }
}

export default withStyles(DashboardStyles)(ProjectCreatorDialog)
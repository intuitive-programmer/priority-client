import React from 'react'

import { withStyles, Grid, Button } from '@material-ui/core'
import { DashboardStyles } from '../../../stylesheets/material-ui'

import CurrentNote from './CurrentNote'
import ActionSteps from './ActionSteps'


const MainNote = ({ classes, note }) => (
  <Grid
    container
    classes={{ container: classes.centered }}
    spacing={24}
    xs={12}
    md={8}
  >
    <Grid
      item
      xs={12}
    >
      <div className="main-note-container light-shadow">
        <CurrentNote note={note} />
        <ActionSteps />
        <div className="main-note-btns flex-center">
          <Button
            type="submit"
            form="action-steps-form"
            variant="contained"
            color="primary"
          >
            Save
          </Button>
        </div>
      </div>
    </Grid>
  </Grid>
)

export default withStyles(DashboardStyles)(MainNote)
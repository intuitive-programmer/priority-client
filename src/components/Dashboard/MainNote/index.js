import React from 'react'

import { withStyles, Grid } from '@material-ui/core'
import { DashboardStyles } from '../../../stylesheets/material-ui'

import CurrentNote from './CurrentNote'

const MainNote = ({ classes, note }) => (
  <Grid
    container
    classes={{ container: classes.centered }}
    spacing={16}
    xs={12}
    md={8}
  >
    <Grid
      item
      xs={12}
    >
      <div className="main-note-container light-shadow">
        <CurrentNote note={note} />
        <div className="main-note-section action-steps-container">
        
        </div>
        <div className="main-note-btns">
        
        </div>
      </div>
    </Grid>
  </Grid>
)

export default withStyles(DashboardStyles)(MainNote)
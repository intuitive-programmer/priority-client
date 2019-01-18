import React from 'react'

import { withStyles, Grid } from '@material-ui/core'
import { LaunchPageStyles } from '../../stylesheets/material-ui'

const Demo = ({ classes }) => (
  <div className="demo-container">
    <Grid
    container
    classes={{ container: classes.centered }}
    spacing={16}
    xs={8}
    >
      <Grid
        item
        classes={{ item: classes.startBtnItem }}
        xs={12}
      >
        {/* Instructional Demo */}
      </Grid>
    </Grid>
  </div>
)

export default withStyles(LaunchPageStyles)(Demo)
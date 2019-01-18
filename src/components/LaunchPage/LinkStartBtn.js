import React from 'react'
import { Link } from 'react-router-dom'

import { withStyles, Grid, Button } from '@material-ui/core'
import { LaunchPageStyles } from '../../stylesheets/material-ui'

const LinkStartBtn = ({ classes, path }) => (
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
      <Link to={path} className="clean-link">
        <Button
          classes={{ root: classes.startBtn }}
        >START</Button>
      </Link>
    </Grid>
  </Grid>
)

export default withStyles(LaunchPageStyles)(LinkStartBtn)
import React from 'react'

import { withStyles, Grid } from '@material-ui/core'
import { LaunchPageStyles } from '../../stylesheets/material-ui'

const Demo = ({ classes }) => (
  <div className="demo-container flex-center">
    <Grid
    container
    classes={{ container: classes.centered }}
    spacing={16}
    xs={8}
    >
      <Grid
        item
        xs={12}
      >
        <div className="launch-text">
          <h3>Set a focus and time-limit.</h3>
          <p>We are going to drive your creativity by adding time pressure, nothing like a deadline to get you going.</p>
          <p>If you're the "does things in the last minute" kind of person than this is fo you!</p>
          <div className="process-list">
            <h3>The process:</h3>
            <ul>
              <li>The first step is <strong>ideate</strong>. Here you need to write as many ideas as fast as you can.</li>
              <li>The second step is <strong>vote</strong>. Click on the notes to add a vote and then the ap will sort them by priority.</li>
              <li>The third step is <strong>action</strong>. Write 3 action steps you can get on with right away.</li>
            </ul>
          </div>
        </div>
      </Grid>
    </Grid>
  </div>
)

export default withStyles(LaunchPageStyles)(Demo)
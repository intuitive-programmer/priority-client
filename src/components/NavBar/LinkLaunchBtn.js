import React from 'react'
import { Link } from 'react-router-dom'

import { withStyles, Button } from '@material-ui/core'
import { PrimaryLayoutStyles } from '../../stylesheets/material-ui'

const LinkLaunchBtn = ({ classes }) => (
  <div className="launch-btn flex-center">
    <Link to='/launch' className="clean-link">
      <Button
        classes={{ root: classes.launchBtn }}
      >Launch</Button>
    </Link>
  </div>
)

export default withStyles(PrimaryLayoutStyles)(LinkLaunchBtn)
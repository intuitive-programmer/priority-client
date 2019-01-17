import React from 'react'

import { withStyles, Button } from '@material-ui/core'
import { PrimaryLayoutStyles } from '../stylesheets/material-ui'

const NavBar = ({ classes }) => (
  <header className="nav-bar light-shadow">
    <div className="launch-btn flex-center">
      <Button
        classes={{
          root: classes.launchBtn
        }}
        >Launch</Button>
    </div>
  </header>
)

export default withStyles(PrimaryLayoutStyles)(NavBar)
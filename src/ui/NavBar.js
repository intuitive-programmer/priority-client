import React from 'react'
import { Link } from 'react-router-dom'

import { withStyles, Button } from '@material-ui/core'
import { PrimaryLayoutStyles } from '../stylesheets/material-ui'

const NavBar = ({ classes }) => (
  <header className="nav-bar light-shadow">
    <div className="launch-btn flex-center">
      <Link to='/launch' className="clean-link">
        <Button
          classes={{ root: classes.launchBtn }}
        >Launch</Button>
      </Link>
    </div>
  </header>
)

export default withStyles(PrimaryLayoutStyles)(NavBar)
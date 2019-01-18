import React from 'react'
import { Link } from 'react-router-dom'

import { withStyles, Grid, Button } from '@material-ui/core'
import { LaunchPageStyles } from '../stylesheets/material-ui'
import { LinkStartBtn } from '../components/LaunchPage'

const LaunchPage = ({ classes }) => (
  <div className="launch-page full-container parchment">
    {/* Settings Form */}
    {/* Instructional Demo */}
    <LinkStartBtn path="/test" />
  </div>
)

export default withStyles(LaunchPageStyles)(LaunchPage)
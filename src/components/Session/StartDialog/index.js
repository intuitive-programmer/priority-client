import React from 'react'
import { Link } from 'react-router-dom'

import { withStyles, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core'
import { SessionStyles } from '../../../stylesheets/material-ui'

const StartDialog = ({ startTimer }) => (
  <Dialog
    open={true}
  >
    <DialogTitle>Get Ready!</DialogTitle>
    <DialogContent>Timer Begins When You Press Start...</DialogContent>
    <DialogActions>
      <Link to='/app/note/write' className="clean-link">
        <Button
          onClick={startTimer}
        >
          Start
        </Button>
      </Link>
    </DialogActions>
  </Dialog>
)

export default withStyles(SessionStyles)(StartDialog)
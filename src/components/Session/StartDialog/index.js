import React from 'react'
import { Link } from 'react-router-dom'

import { withStyles, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core'
import { SessionStyles } from '../../../stylesheets/material-ui'

const StartDialog = ({ startTimer, match }) => {
  const currentScene = match.url.split('/')[2]
  
  const nextScene = () => {
    if (currentScene === 'note') {
      return '/app/note/write'
    } else if (currentScene === 'vote') {
      return '/app/vote/prioritise'
    }
  }

  return(
    <Dialog
      open={true}
    >
      <DialogTitle>Get Ready!</DialogTitle>
      <DialogContent>Timer Begins When You Press Start...</DialogContent>
      <DialogActions>
        <Link to={nextScene()} className="clean-link">
          <Button
            onClick={() => startTimer(currentScene)}
          >
            Start
          </Button>
        </Link>
      </DialogActions>
    </Dialog>
  )
}

export default withStyles(SessionStyles)(StartDialog)
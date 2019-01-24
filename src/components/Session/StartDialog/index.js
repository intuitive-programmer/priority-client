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
      <DialogContent>
        <p>Timer Begins When You Press Start...</p>
        {currentScene === 'note'
          ? <p>Remember to write down as many ideas as possible. It's at the edges of the conscious mind where you'll find the treasure.</p>
          : <p>Click on the notes to add a vote. Click on the votes to remove.</p>
        }
      </DialogContent>
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
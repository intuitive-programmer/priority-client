import React from 'react'
import { Link } from 'react-router-dom'

import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core'

const DoneDialog = () => (
  <Dialog
    open={true}
  >
    <DialogTitle>Nice!</DialogTitle>
    <DialogContent>
      <p>You've got your priorities set.</p>
      <p>Now do the work and take over the world!</p>  
    </DialogContent>
    <DialogActions>
      <Link to='/' className="clean-link">
        <Button
          onClick={() => window.location.reload()}
          variant="contained"
          color="primary"
        >
          Start Again
        </Button>
      </Link>
    </DialogActions>
  </Dialog>
)

export default DoneDialog
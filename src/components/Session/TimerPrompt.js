import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@material-ui/core'

const TimerPrompt = ({ hideTimer, addTime, toggleNoteCreator }) => (
  <div className="timer-prompt flex-center light-shadow">
    Need more time?
    <Button
      onClick={() => {
        hideTimer()
        addTime()
        toggleNoteCreator()
      }}
    >Yes please!</Button>
    <Link to='/app/note/review' className="clean-link">
      <Button
        onClick={() => hideTimer()}
      >No thanks!</Button>
    </Link>
  </div>
)

export default TimerPrompt
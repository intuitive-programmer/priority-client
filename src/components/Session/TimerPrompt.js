import React from 'react'
import { Button } from '@material-ui/core';

const TimerPrompt = ({ hideTimerAndActivateNoteCreator }) => (
  <div className="timer-prompt flex-center light-shadow">
    Need more time?
    <Button
      onClick={hideTimerAndActivateNoteCreator}
    >YES</Button>
  </div>
)

export default TimerPrompt
import React from 'react'

import { Button } from '@material-ui/core'

const SessionFooter = ({ match, history }) => {
  const handleNextStepClick = () => {
    const currentScene = match.url.split('/')[2]
    switch (currentScene) {
      case 'note':
      return history.push('/app/vote/start')
      default:
      return null
    }
  }

  return(
    <footer className="session-footer flex-center top-shadow">
      <Button
        onClick={() => handleNextStepClick()}
        variant="outlined"
        color="primary">Next Step</Button>
    </footer>
  )
}

export default SessionFooter
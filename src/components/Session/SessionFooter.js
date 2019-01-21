import React, { Component } from 'react'

import { Button } from '@material-ui/core'

class SessionFooter extends Component {
  state = {
    displaySortBtn: true
  }

  handleNextStepClick = () => {
    const { match, history } = this.props
    const currentScene = match.url.split('/')[2]
    switch (currentScene) {
      case 'note':
      return history.push('/app/vote/start')
      case 'vote':
      return console.log("next bit")
      default:
      return null
    }
  }

  render() {
    const { displaySortBtn } = this.state
    const { match } = this.props
    return(
      <footer className="session-footer flex-center top-shadow">
        {match.url === '/app/vote/review' && displaySortBtn
          ? this.renderSortBtn()
          : this.renderNextStepBtn()
        }
      </footer>
    )
  }

  renderSortBtn = () => (
    <Button
      variant="contained"
      color="primary"
      onClick={() => this.setState({ displaySortBtn: false })}
    >Sort By Priority</Button>
  )

  renderNextStepBtn = () => (
    <Button
      onClick={() => this.handleNextStepClick()}
      variant="outlined"
      color="primary"
    >Next Step</Button>
  )
}

export default SessionFooter
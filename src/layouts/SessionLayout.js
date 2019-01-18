import React, { Component } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import { NoteCreator, StartDialog, NotesList, SessionFooter, TimerPrompt } from '../components/Session'

class SessionLayout extends Component {
  state = {
    displayTimer: false,
    disableNoteCreator: false,
  }

  startTimer = () => {
    setTimeout(() =>
      this.setState({
        displayTimer: true,
        disableNoteCreator: true
      }), 1000)
  }

  hideTimerAndActivateNoteCreator = () => this.setState({
    displayTimer: false,
    disableNoteCreator: false
  })

  render() {
    const { displayTimer, disableNoteCreator } = this.state
    return(
      <div id="session-layout" className="full-container parchment">
        <header className="session-header flex-center">
          {displayTimer &&
            <TimerPrompt
            hideTimerAndActivateNoteCreator={this.hideTimerAndActivateNoteCreator}
            />
          }
          <Switch>
            <Route path='/app/note'
              render={routerProps =>
                <NoteCreator
                disableNoteCreator={disableNoteCreator}
                />
              }
            />
          </Switch>
        </header>
        <main className="session-main">
          <Switch>
            <Route path='/app/note/start'
              render={routerProps => 
                <StartDialog
                  {...routerProps}
                  startTimer={this.startTimer}
                />
              }
            />
            <Route path='/app/note/write' component={NotesList} />
            <Redirect to='/app/note/start' />
          </Switch>
        </main>
        <Switch>
          <Route path='/app/note/review' component={SessionFooter} />
        </Switch>
      </div>
    )
  }
}

export default SessionLayout
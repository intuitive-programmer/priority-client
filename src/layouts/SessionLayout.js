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
      }), 10000)
  }

  addTime = () => {
    setTimeout(() => {
      this.props.history.push('/app/note/review')
      this.setState({ disableNoteCreator: true })
    }, 5000)
  }

  hideTimer = () => this.setState({ displayTimer: false })

  toggleNoteCreator = () => this.setState(state => ({ disableNoteCreator: !state.disableNoteCreator }))

  render() {
    const { displayTimer, disableNoteCreator } = this.state
    return(
      <div id="session-layout" className="full-container parchment">
        <header className="session-header flex-center">
          {displayTimer &&
            <TimerPrompt
              hideTimer={this.hideTimer}
              addTime={this.addTime}
              toggleNoteCreator={this.toggleNoteCreator}
            />
          }
          <Switch>
            <Route path='/app/note'
              render={routerProps =>
                <NoteCreator
                  {...routerProps}
                  disableNoteCreator={disableNoteCreator}
                />
              }
            />
            <Route path='/app/vote'
              render={() => <div>Vote Header</div>}
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
            <Route path='/app/note/review' component={NotesList} />
            <Route path='/app/vote/start'
              render={routerProps => 
                <StartDialog
                  {...routerProps}
                  startTimer={this.startTimer}
                />
              }
            />
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
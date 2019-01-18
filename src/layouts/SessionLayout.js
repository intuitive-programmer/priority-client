import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import NoteCreator from '../components/Session/NoteCreator'

const SessionLayout = () => (
  <div id="session-layout" className="full-container parchment">
    <header className="session-header flex-center">
      <Switch>
        <Route path='/app/note' component={NoteCreator} />
      </Switch>
    </header>
    <main className="session-main">
        <Route path='/app/note' render={() => <div>NoteMain</div>} />
      <Switch>
        <Route path='/app/note/start' render={() => <div>NoteStart</div>} />
        <Redirect to='/app/note/start' />
      </Switch>
    </main>
    <footer className="session-footer flex-center top-shadow">
      <Switch>
        <Route path='/app' render={() => <div>Footer</div>} />
      </Switch>
    </footer>
  </div>
)

export default SessionLayout
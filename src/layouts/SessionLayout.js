import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import NoteCreator from '../components/Session/NoteCreator'
import NotesList from '../components/Session/NotesList'

const SessionLayout = () => (
  <div id="session-layout" className="full-container parchment">
    <header className="session-header flex-center">
      <Switch>
        <Route path='/app/note' component={NoteCreator} />
      </Switch>
    </header>
    <main className="session-main">
      <Switch>
        <Route path='/app/note/write' component={NotesList} />
        <Redirect to='/app/note/write' />
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
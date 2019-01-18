import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import NavBar from '../ui/NavBar'
import { WelcomePage, LaunchPage } from '../pages'
import { SessionLayout } from '.'

const PrimaryLayout = () => (
  <div id="primary-layout" className="full-container">
    <NavBar />
    <main className="primary-main">
      <Switch>
        <Route path='/welcome' exact component={WelcomePage} />
        <Route path='/launch' component={LaunchPage} />
        <Route path='/app' component={SessionLayout} />
        <Redirect to='/welcome' />
      </Switch>
    </main>
  </div>
)

export default PrimaryLayout
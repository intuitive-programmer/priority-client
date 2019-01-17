import React from 'react'

import { Switch, Route } from 'react-router-dom'

import NavBar from '../ui/NavBar'
import WelcomePage from '../pages/WelcomePage'

const PrimaryLayout = () => (
  <div id="primary-layout" className="full-container">
    <NavBar />
    <main className="primary-main">
      <Switch>
        <Route path='/' exact component={WelcomePage} />
      </Switch>
    </main>
  </div>
)

export default PrimaryLayout
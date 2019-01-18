import React from 'react'
import { Route } from 'react-router-dom'

import { LinkLaunchBtn } from '../components/NavBar'

const NavBar = () => (
  <header className="nav-bar light-shadow">
    <Route path='/welcome' exact component={LinkLaunchBtn} />
  </header>
)

export default NavBar
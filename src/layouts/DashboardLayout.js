import React from 'react'

import { Switch, Route } from 'react-router-dom'

import { MainNote, ProjectCreatorDialog } from '../components/Dashboard'

const DashboardLayout = () => (
  <div id="dashboard-layout" className="full-container">
    <Route path='/dashboard' component={MainNote} />
    <Switch>
      <Route path='/dashboard/create-project' exact component={ProjectCreatorDialog} />
    </Switch>
  </div>
)

export default DashboardLayout
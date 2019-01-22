import React from 'react'

import { Route } from 'react-router-dom'

import { MainNote } from '../components/Dashboard'

const DashboardLayout = () => (
  <div id="dashboard-layout" className="full-container">
    <Route path='/dashboard' component={MainNote} />
    <Route path='/dashboard/create-project' render={() => console.log("create project")} />
  </div>
)

export default DashboardLayout
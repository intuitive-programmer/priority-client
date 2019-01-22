import React from 'react'
import { connect } from 'react-redux'

// import { Switch, Route, Redirect } from 'react-router-dom'

import { MainNote } from '../components/Dashboard'

const DashboardLayout = ({ notes }) => (
  <div id="dashboard-layout" className="full-container">
    <MainNote note={notes[0]} />
    <div>

    </div>
  </div>
)

const mapStateToProps = state => ({
  notes: state.notes
})

export default connect(mapStateToProps)(DashboardLayout)
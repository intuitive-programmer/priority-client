import React from 'react'
import { connect } from 'react-redux'

import { Switch, Route, Redirect } from 'react-router-dom'

const DashboardLayout = ({ notes }) => (
  <div id="dashboard-layout" className="full-container">
    <div>
      {console.log(notes)}
    </div>
    <div>

    </div>
  </div>
)

const mapStateToProps = state => ({
  notes: state.notes
})

export default connect(mapStateToProps)(DashboardLayout)
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { PrimaryLayout } from './layouts'
import { MuiThemeProvider } from '@material-ui/core'
import { theme } from './stylesheets/material-ui'

const App = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Route path='/' component={PrimaryLayout} />
    </BrowserRouter>
  </MuiThemeProvider>
)

export default App
